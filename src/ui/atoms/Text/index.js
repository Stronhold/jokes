import React from 'react';

const Text = ({cs, children}) => (
  <span className={cs}>
    {children}
  </span>
);

export default Text;