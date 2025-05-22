import React from 'react'

const Input = ({ type, placeholder, inputClass }) => {
    return (
        <input className={`${inputClass}`} type={type} placeholder={placeholder} />
    )
}

export default Input