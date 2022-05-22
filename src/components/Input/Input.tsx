import React, { FunctionComponent, useEffect, useState } from 'react';

interface InputProps {
  getValue: (value: string) => void;
}

const Input: FunctionComponent<InputProps> = ({ getValue }) => {
  const [value, setValue] = useState('');

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        getValue(value);
      }}
    >
      <input
        className="input"
        id="search"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
};

export default Input;
