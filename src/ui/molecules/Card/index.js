import React from 'react';
import Header from '../../atoms/Header';
import Text from '../../atoms/Text';
import { HEADER_TAG } from '../../constants/header.enum';
import './index.scss';

const Card = ({title, text}) => (
  <div className="j-card">
    <header className="j-card__title"><Header tag={HEADER_TAG.H2}>{title}</Header></header>
    <span className="j-card__text"><Text>{text}</Text></span>
  </div>
);

export default Card;