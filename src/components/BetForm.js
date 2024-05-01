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

    return (
        <div className='w-full h-full flex flex-col p-4 gap-6'>
            <div className='flex flec-row gap-4'>
                <FormTextField name='betAmount' label='Bet Amount' onChangeHandler={handleInputChange} value={current_bet.betAmount}/>
                <FormTextField name='profitToWin' label='Profit to Win' onChangeHandler={null} value={current_bet.betAmount*current_bet.targetMult}/>
            </div>
            <FormTextField name='targetMult' label='Target Multiplier' onChangeHandler={handleInputChange} value={current_bet.targetMult}/>
            <FormTextField name='winChance' label='Win Chance' onChangeHandler={null} value={current_bet.betAmount}/>
            <button className='px-8 py-2 bg-primary-blue text-white rounded-lg' onClick={handleBetClick}>
                Bet
            </button>
        </div>
    );
}

export default BetForm;