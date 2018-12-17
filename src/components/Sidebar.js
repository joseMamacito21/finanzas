import React from 'react';
import { Col } from 'reactstrap';
import SidebarItem from './SidebarItem';

const sidebarItems = [
  {
    text: 'Informacion', 
    path: '/'
  },
  {
    text: 'Analisis Financiero', 
    path: '/analytics'
  },
  {
    text: 'Recomendaciones', 
    path: '/dashboard'
  },
]

const renderSidebarItems = sidebarItems.map(({ text, path }) => {
  return (
      <SidebarItem key={text} text={text} path={path} />
  );    
});

const Sidebar = () => {
  return (
    <Col className="px-1" md={2}>
      <div className='sidebar py-2 sticky-top flex-grow-1'>
        {renderSidebarItems}
      </div>      
    </Col>
  )
};

export default Sidebar;