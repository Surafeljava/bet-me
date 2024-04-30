import React from 'react';

function LandingScreen() {
    return (
        <div className='flex flex-1 min-h-screen bg-primary-bg-blue p-8 flex-col gap-4'>
            <div className='flex flex-grow justify-center items-center bg-secondary-bg-blue rounded-xl relative'>
                <p className='text-white'>LandingScreen</p>
                <div className='absolute right-8 top-8 flex flex-row gap-4'>
                    <div className='px-6 py-1.5 rounded-full bg-primary-blue text-white'>3.56x</div>
                </div>
            </div>
            <div className='flex flex-row gap-4 h-[350px]'>
                <div className='flex bg-secondary-bg-blue rounded-xl h-full flex-grow'>
                </div>
                <div className='flex border-[1px] border-primary-blue rounded-xl h-full flex-grow'>
                </div>
            </div>
        </div>
    );
}

export default LandingScreen;