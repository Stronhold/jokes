import React from 'react';
import Button from '../../atoms/Button';
import './index.scss';

const ButtonIcon = ({text, icon, cs, bStyle, bKind, onClick}) => {
  return (
    <Button cs={cs} bStyle={bStyle} kind={bKind} onClick={onClick}>
      {icon}
      {text}
    </Button>
    );
};

export default ButtonIcon;