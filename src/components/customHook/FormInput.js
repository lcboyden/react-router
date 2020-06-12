//custom hook
import React, {useState} from 'react';

export function FormInput(initialValue, name){
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => setValue(e.target.value);

  // e.preventDefault()
  // props.onSubmit()
  return {
    placeholder: `Enter ${name}`,
    name: name, 
    value: value,
    onChange: handleChange,
  }
};