import React, { useState, useEffect } from 'react';

import api from '../../services/api';

const Select = ({ label, name, ...rest }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        api.get('payments').then(response => {
            const total = response.data
            setOptions(total);
        });
    }, []);
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select
                className="form-control form-control-lg"
                value=""
                id={name}
                {...rest}
            >
                {options.map(option => {
                    return <option key={option.name} value={option.name}>{option.name}</option>
                })}
            </select>
        </div>
    );
}


export default Select;