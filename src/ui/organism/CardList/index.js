import React from 'react';
import Card from '../../molecules/Card';
import './index.scss';

const CardList = ({cards}) => (
  <ul className="j-cardList">
    {cards.map(({id, joke}) => <Card key={id} text={joke} title={id}/>)}
  </ul>
);

export default CardList;