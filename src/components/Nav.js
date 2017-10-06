import React from 'react';
import NavItem from './NavItem';

export default class Nav extends React.Component{

  
    render(){
      
//I passed the fontawesome classes as a icon props because i dun't have the psd  
      var navItems =[
        <NavItem title="dashboard" icon="tachometer" url="" isActive="true" key="1" />,
        <NavItem title="user profile" icon="user" url="" isActive="false" key="2"  />,
        <NavItem title="table list" icon="table" url="" isActive="false" key="3"  />,
        <NavItem title="typography" icon="clipboard" url="" isActive="false" key="4"  />,
        <NavItem title="icons" icon="yelp" url="" isActive="false" key="5" />,
        <NavItem title="Maps" icon="map-marker" url="" isActive="false" key="6"  />,
        <NavItem title="Notification" icon="bell" url="" isActive="false" key="7"  />,
      ];

      return(
        <div className="leftNavCont">
          <h2 className="lbl text-center upper-case">Creative Tim </h2>
        <ul className="leftNav">
          {navItems}
          </ul>
          </div>
        
      );
    }
  } 
  
  
  
  