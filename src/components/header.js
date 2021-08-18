import React from 'react';

const Header = ({ titulo }) => {
  return (
    <div className="titulo black t-left header">
      <h2> {titulo} </h2>
    </div>
  );
};

export default Header;
