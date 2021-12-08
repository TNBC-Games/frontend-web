import React from 'react'

function Input({type, placeholder, className, onChange, min, value, max}) {
    return (
        <div className = "form-section">
            <input
                id = "Bullets"
                className= {`${className}`}
                placeholder={placeholder}
                type= {type}
                onChange={onChange}
                value={value}
                min={min}
            />
        </div>
    )
}

export default Input
