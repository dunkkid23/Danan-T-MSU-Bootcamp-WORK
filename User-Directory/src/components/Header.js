import React from 'react';
import "../styles/header.css";

function Header () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <h6>Filter your directory by typing a name in filter field.</h6>
      </div>
    )
  }

export default Header;