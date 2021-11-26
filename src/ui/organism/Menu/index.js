import React from 'react';
import Header from '../../atoms/Header';
import { HEADER_TAG } from '../../constants/header.enum';
import './index.scss';

const Menu = () => {
  return (
    <nav className="j-header--left">
      <Header tag={HEADER_TAG.H1}>chuck norris party</Header>
    </nav>
  );
};

export default Menu;