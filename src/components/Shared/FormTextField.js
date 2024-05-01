import React from 'react'

function FormTextField({name, label, onChangeHandler, value, placeholder='0.0000000'}) {
    return (
        <div className='flex flex-col gap-2 w-full'>
            <p className='text-white'>{label}</p>
            <div className='flex-grow'>
                <input disabled={!onChangeHandler} type='text' className='w-full py-3 px-3 rounded-lg bg-accent-blue text-slate-400 text-sm'
                onChange={onChangeHandler} value={value} name={name} placeholder={placeholder}/>  
            </div>
        </div>
    );
}

export default FormTextField;