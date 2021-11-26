import React from 'react';
import './index.scss';

const DefaultLayout = ({head, content}) => (
  <div className="j-defaultLayout">
    <header className="j-defaultLayout__menu">
      {head}
    </header>
    <main className="j-defaultLayout__content">
      {content}
    </main>
  </div>
);

export default DefaultLayout;