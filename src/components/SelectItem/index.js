import React from 'react'

const SelectItem = ({options, state, handleChange, handleInput, inputLabel, inputName}) => {
  return (
    <div>
        <label htmlFor="state">{inputLabel}</label>
        <select type="text" name={inputName} data-name={inputLabel} value={state} onChange={handleChange} onBlur={handleInput}>
            {options.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
            ))}
        </select>
    </div>
  )
}

export default SelectItem
