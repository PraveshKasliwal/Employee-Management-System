import React from 'react';
import { FiPlus } from "react-icons/fi";

const Header = ({ onAddClick }) => {
  return (
    <header className="main-header">
      <h2 className="header-title">All Employees</h2>
      <button className="primary-button" onClick={onAddClick}>
        <span className="material-symbols-outlined">
          <FiPlus className='icon' />
        </span>
        <span>Add New Employee</span>
      </button>
    </header>
  );
};

export default Header;