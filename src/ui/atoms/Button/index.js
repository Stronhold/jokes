import React from 'react';
import './index.scss';

const Button = ({cs, kind, children, bStyle, onClick}) => {
  const className = `j-button j-button--${kind} j-button--${bStyle} ${cs}`;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
} 

export default Button;