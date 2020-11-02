import React from 'react';

const Textarea = ({ label, name, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <textarea className="form-control form-control-lg" id={name} {...rest} />
        </div>
    );
}


export default Textarea;
