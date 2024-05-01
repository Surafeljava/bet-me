import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeNewBet } from '../redux/slices/betSlices';
import BetForm from './BetForm';
import RecentHistory from './RecentHistory';
import AnimatedCounter from './Shared/AnimatedCounter';
import TopBetList from './Shared/TopBetList';

import utils from '../utils/utils';

function LandingScreen() {
    const dispatch = useDispatch();

    const {bets, next_number, current_bet} = useSelector((state) => state.bets);

    const handleBetSubmit = () => {
        const data = {
            ...current_bet,
            generatedNumber: next_number,
            id: utils.generateUUID()
        }

        dispatch(makeNewBet(data));
    }

    return (
        <div className='flex flex-1 min-h-screen bg-primary-bg-blue p-2 md:p-4 lg:p-6 xl:p-8 flex-col gap-4 font-montserrat'>
            <div className='flex flex-grow justify-center items-center bg-secondary-bg-blue rounded-xl relative min-h-[400px] w-full'>
                <AnimatedCounter number={next_number} onCountFinish={handleBetSubmit}/>
                <TopBetList bets={bets}/>
            </div>
            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex bg-secondary-bg-blue rounded-xl h-auto w-full lg:w-1/2'>
                    <BetForm/>
                </div>
                <div className='flex border-[1px] border-primary-blue rounded-xl h-auto flex-grow'>
                    <RecentHistory bets={bets}/>
                </div>
            </div>
        </div>
    );
}

export default LandingScreen;