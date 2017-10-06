import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class NavItem extends React.Component{

  constructor(){
    super();
    
    this.state = {navElementState : "inActive"};

    //bind the click event to this render
    this.onClick = this.handleClick.bind(this);
  }

  //change the state on this render when click to change the style
  //to-do reset the state of other renders
  handleClick(event) {

    this.setState({
      navElementState: "active cardShadow",
    });
  }

    render(){
      //check if the passed popse is active -i know it is not the best solution-
      var isFirstItem;
      if(this.props.isActive === "true")
      {
        isFirstItem = "active cardShadow"
      }
      
      return(
        
        <li className={this.state.navElementState + " nav-item " + isFirstItem} onClick={this.onClick} >
          <i className={'fa fa-'+this.props.icon}></i>
          {this.props.title}
          </li>
        
      );
    }
  } 

  
  
  