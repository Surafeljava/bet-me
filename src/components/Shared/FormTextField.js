import React, { useEffect, useState } from 'react'

function FormTextField({name, label, onChangeHandler, value, placeholder='0.0000000', formValidation}) {

    const [valid, setValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setValid((prev) => {
            const res = formValidation(name, value);
            if(res){
                setErrorMessage(res);
                return false;
            }else{
                return true;
            }
        });
    // eslint-disable-next-line
    }, [value])

    return (
        <div className='flex flex-col w-full'>
            <p className='text-white'>{label}</p>
            <div className='flex-grow mt-2'>
                <input disabled={!onChangeHandler} type='text' 
                className={`w-full py-2 md:py-3 px-3 rounded-lg bg-accent-blue text-slate-400 text-sm border-[1px] disabled:border-slate-400 focus:outline-none ${valid ? 'border-transparent focus:border-primary-blue' : 'border-primary-red focus:border-primary-red'}`}
                onChange={onChangeHandler} value={value} name={name} placeholder={placeholder}/>  
            </div>
            {!valid && <p className='text-primary-red text-[13px]'>{errorMessage}</p>}
        </div>
    );
}

export default FormTextField;