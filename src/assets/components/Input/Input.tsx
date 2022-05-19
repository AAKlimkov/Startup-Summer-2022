import React, { FunctionComponent, useState } from 'react';

interface InputProps {
  onSubmitInp: (value: string) => void;
}

const Input: FunctionComponent<InputProps> = ({ onSubmitInp }) => {
  const [value, setValue] = useState('');

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitInp(value);
      }}
    >
      <input
        className="input"
        id="search"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
