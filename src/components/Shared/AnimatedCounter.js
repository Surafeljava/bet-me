import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function AnimatedCounter({number, onCountFinish}) {

    const {current_bet} = useSelector((state) => state.bets);

    console.log(current_bet.targetMult);
    console.log(number);

    const [num, setNum] = useState(1);
    const numRef = useRef(num);
    const [decimal, setDecimal] = useState(0);
    const decimalRef = useRef(decimal);

    const [n,d] = `${number}`.split('.');
    // console.log(n,d);

    const [numCountEnded, setNumCountEnded] = useState(false);
    const [decimalCountEnded, setDecimalCountEnded] = useState(false);

    useEffect(() => {
        if(numCountEnded && decimalCountEnded && number>1){
            onCountFinish();
        }
        // eslint-disable-next-line
    }, [numCountEnded, decimalCountEnded])

    useEffect(() => {
        setNum((prev) => 1);
        numRef.current = 1;

        setDecimal((prev) => 0);
        decimalRef.current = 0;

        setNumCountEnded(false);
        setDecimalCountEnded(false);
        // eslint-disable-next-line
    }, [number])

    useEffect(() => {
        const interval = setInterval(() => {
            if(numRef.current<n){
                setNum((n) => n + 1);
                numRef.current = numRef.current + 1;
            }else{
                setNumCountEnded((prev) => true);
            }
        }, 30)

        return () => clearInterval(interval)
        // eslint-disable-next-line
    }, [number])

    useEffect(() => {
        const interval = setInterval(() => {
            if(decimalRef.current<d){
                setDecimal((n) => n + 1);
                decimalRef.current = decimalRef.current + 1;
            }else{
                setDecimalCountEnded((prev) => true);
            }
        }, 40)

        return () => clearInterval(interval)
        // eslint-disable-next-line
    }, [number])

    return (
        <div className={`text-8xl tracking-wider font-semibold ${(!numCountEnded || !decimalCountEnded) ? 'text-white' : (parseFloat(current_bet.targetMult)>=parseFloat(number)) ? 'text-primary-blue' : 'text-primary-red'}`}>
            {num}.{decimal<10 ? `0${decimal}` : decimal}x
        </div>
    );
}

export default AnimatedCounter;