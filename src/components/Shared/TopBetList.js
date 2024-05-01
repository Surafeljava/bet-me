import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

function TopBetList({bets}) {

    let bets_list = [...bets];
    bets_list.reverse();
    if(bets_list.length>5){
        bets_list = bets_list.slice(0, 5);
    }
    bets_list.reverse();

    // console.log(bets_list);

    return (
        <div className='absolute right-2 top-2 md:right-8 md:top-8 flex flex-row gap-1 lg:gap-3 w-full md:w-auto'>
            <AnimatePresence mode={'sync'}>
                {bets_list.map((bet) => {
                    const won = parseFloat(bet.targetMult) >= parseFloat(bet.generatedNumber);
                    return (
                        <motion.div 
                        layout
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring" }}
                        key={bet.id} className={`px-3 text-[13px] flex-grow flex justify-center items-center md:text-base md:px-6 py-1.5 rounded-full font-medium tracking-wide text-white ${won?'bg-primary-blue' :'bg-secondary-blue'}`}>
                            {bet.generatedNumber}x
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}

export default TopBetList;