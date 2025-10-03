import React from 'react';
import  { FaUsers } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='sidebar-inner-container'>
        <h1 className="sidebar-title">Walmart Co.</h1>
        <nav className="sidebar-nav">
          <a className="nav-link active" href="#">
            <span className="material-symbols-outlined"><FaUsers className='icon' /></span>
            <span>All Employees</span>
          </a>
        </nav>
      </div>
      <div className="user-profile">
        <img
          alt="Admin Avatar"
          className="user-avatar"
          src="https://i.pravatar.cc/40?u=admin"
        />
        <div>
          <p className="user-name">Admin User</p>
          <p className="user-email">admin@gmail.co</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;