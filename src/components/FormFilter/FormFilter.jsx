import React from "react";
import PropTypes from 'prop-types';

export const FormFiler = ({value, onChange}) => {
    return (
        <label htmlFor="filter">Find contacts by Name
                <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    name="filter"
                />
                </label>
    )
}

FormFiler.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};