import React from 'react';
import {HEADER_TAG} from '../../constants/header.enum';
import './index.scss';

const Header = ({tag = HEADER_TAG.H1, cs, children}) => {
  const Tag = tag;
  return ( 
    <Tag className={cs}>{children}</Tag>
  )
};

export default Header;