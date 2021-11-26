import './index.scss';
import IconRefresh from '../../atoms/IconRefresh';
import ButtonIcon from '../../molecules/ButtonIcon';
import { BUTTON_KINDS, BUTTON_STYLE } from '../../constants/button.enum';
import Menu from '../../organism/Menu';
import DefaultLayout from '../../template/default';
import CardList from '../../organism/CardList';
import React, {useEffect, useState} from 'react';
import { getJokes } from '../../../core/api/jokes';

const Home = () => {
  const [cards, setCards] = useState([]);
  const requestData = async () => {
    const jokes = await getJokes();
    setCards(jokes.value);
  };
  useEffect(() => {
    const fetchData = async () => requestData();
    fetchData();
  }, []);
  const head = <Menu />;
  const content = (<div>
    <CardList cards={cards}/>
    <ButtonIcon onClick={requestData} cs={'float--bottom-right'} icon={<IconRefresh />} bStyle={BUTTON_STYLE.ROUNDED} bKind={BUTTON_KINDS.PRIMARY} />
    </div>);
  return (
    <DefaultLayout content={content} head={head}/>
  );
}

export default Home;
