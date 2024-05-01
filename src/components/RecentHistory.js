import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

function RecentHistory({bets}) {

    let bets_list = [...bets];
    bets_list.reverse();
    if(bets_list.length>5){
        bets_list = bets_list.slice(0, 5);
    }

    return (
        <div className='w-full h-full flex flex-col gap-2 p-4'>
            <p className='text-white text-center font-medium'>Recent History</p>
            <div className='flex flex-col gap-1 w-full flex-grow'>
                <AnimatePresence mode={'popLayout'}>
                    {bets_list.map((bet) => {
                        const won = parseFloat(bet.targetMult) >= parseFloat(bet.generatedNumber);
                        return (
                            <motion.div 
                            layout
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring" }}
                            key={bet.id} className={`flex flex-row gap-1 md:gap-2 lg:gap-4 xl:gap-8 items-center px-4 py-2 bg-secondary-bg-blue border-[1px] rounded-xl ${won?'border-primary-blue':'border-primary-red'}`}>
                                <div className='flex flex-col'>
                                    <p className='text-slate-400 text-[10px] md:text-[12px]'>Bet Amount</p>
                                    <div className='flex flex-row items-end gap-1'>
                                        <p className='text-white text-[10px] md:text-[11px] mb-1'>ETB</p>
                                        <p className='text-white font-bold text-base md:text-lg'>{bet.betAmount}</p>
                                    </div>
                                </div>

                                {won && (
                                    <>
                                        <div className='w-1.5 h-1.5 bg-slate-500 rounded-full'></div>

                                        <div className='flex flex-col'>
                                            <p className='text-slate-400 text-[10px] md:text-[12px]'>Won Amount</p>
                                            <div className='flex flex-row items-end gap-1'>
                                                <p className='text-white text-[10px] md:text-[11px] mb-1'>ETB</p>
                                                <p className='text-white font-bold text-base md:text-lg'>{bet.betAmount*bet.targetMult}</p>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className='w-1.5 h-1.5 bg-slate-500 rounded-full'></div>

                                <div className='flex flex-col'>
                                    <p className='text-slate-400 text-[10px] md:text-[12px]'>Target Multiplier</p>
                                    <p className='text-white font-bold text-base md:text-lg'>{bet.targetMult}</p>
                                </div>

                                <div className='flex flex-grow justify-end'>
                                    <p className={`italic text-lg md:text-xl font-bold ${won?'text-primary-blue':'text-primary-red'}`}>
                                        {won?'WIN' :'LOSE'}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default RecentHistory;