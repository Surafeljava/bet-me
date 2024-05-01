import React from 'react';
import { handleBetChange, generateNextNumber } from '../redux/slices/betSlices';
import { useDispatch, useSelector } from 'react-redux';

import FormTextField from './Shared/FormTextField';

function BetForm() {
    const dispatch = useDispatch();

    const current_bet = useSelector((state) => state.bets.current_bet);

    const handleBetClick = () => {
        dispatch(generateNextNumber());
    }

    const handleInputChange = (e) => {
        const betForm = {...current_bet};
        dispatch(handleBetChange({...betForm, [e.target.name]:e.target.value}))   
    }

    const formValidation = (name, value) => {
        switch (name) {
            case 'targetMult':
                if(isNaN(value)){
                    return "Invalid target multiplier.";
                }

                if(value<1 || value>100){
                    return "Must be from 1.01 to 100.00";
                }
                return null;
            case 'betAmount':
                if(isNaN(value)){
                    return "Invalid bet amount.";
                }
                return null;
            default:
                return null;
        }
    }

    const canBet = () => {
        const targetCheck = formValidation('targetMult', current_bet.targetMult);
        const betAmount = formValidation('betAmount', current_bet.betAmount);

        if(!targetCheck && !betAmount){
            return true;
        }else{
            return false;
        }
    }

    return (
        <div className='w-full h-full flex flex-col p-4 gap-4 lg:gap-6'>
            <div className='flex flex-row gap-4'>
                <FormTextField name='betAmount' label='Bet Amount' formValidation={formValidation} onChangeHandler={handleInputChange} value={current_bet.betAmount} placeholder='enter amount'/>
                <FormTextField name='profitToWin' label='Profit to Win' formValidation={formValidation} onChangeHandler={null} value={current_bet.betAmount*current_bet.targetMult}/>
            </div>
            <FormTextField name='targetMult' label='Target Multiplier' formValidation={formValidation} onChangeHandler={handleInputChange} value={current_bet.targetMult}/>
            <FormTextField name='winChance' label='Win Chance' formValidation={formValidation} onChangeHandler={null} value={`${((100-current_bet.targetMult)/100)*100}%`} 
            placeholder='win chance'/>
            <button disabled={!canBet()} 
            className='px-8 py-2 bg-primary-blue hover:opacity-80 duration-300 text-white rounded-lg' onClick={handleBetClick}>
                Bet
            </button>
        </div>
    );
}

export default BetForm;