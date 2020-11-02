import React from 'react';

const Input = ({ label, name, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                className="form-control form-control-lg"
                type="text"
                id={name}
                placeholder={label}
                {...rest}
            />
        </div>
    );
}


export default Input;