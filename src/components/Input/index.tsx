// libs
import React from 'react';
import classNames from 'classnames';

// styles
import style from './Input.module.scss';

interface TInputProps {
  value: string;
  placeholder: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<TInputProps> = ({ value, placeholder, onChange, className }): React.ReactElement => (
  <input
    className={classNames(style.root, className)}
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;
