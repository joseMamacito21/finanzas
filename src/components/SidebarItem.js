import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ text, path }) => {
  return(
    <div className='sidebarItem'>
      <Link to={path}>{text}</Link>
    </div>
  )
};

export default SidebarItem;