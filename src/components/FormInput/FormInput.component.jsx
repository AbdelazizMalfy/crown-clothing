import React from 'react';
import './FormInput.styles.scss';

function FormInput({ onInputChange , label , ...otherProps }) {
    return (
        <div className='group'>
            <input className='form-input' onChange={onInputChange} {...otherProps} />
            {
                label ? 
                (<label className={`${otherProps.value.length? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>) 
                : null
            }
        </div>
    )
}

export default FormInput;
