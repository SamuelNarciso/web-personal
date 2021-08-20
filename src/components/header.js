import React from 'react';

const Header = ({ titulo }) => {
  return (
    <div className="header">
      <h1 className='titulo t-left'> {titulo} </h1>
    </div>
  );
};

export default Header;
