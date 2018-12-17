import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';

const AnalyticsNav = ({ onClick }) => {
  return(
    <Nav>
      <NavItem>
        <NavLink onClick={value => onClick('vertical')}>Analisis vertical /</NavLink>
      </NavItem>
      <NavItem>
        <NavLink onClick={value => onClick('horizontal')}>Analisis horizontal /</NavLink>
      </NavItem>
      <NavItem>
        <NavLink onClick={value => onClick('reasons')}>Razones financieras</NavLink>
      </NavItem>      
    </Nav>
  )
};

export default AnalyticsNav;