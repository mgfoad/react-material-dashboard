import React from 'react';

//UpperCard class component with a capital letter !!!
// export to use as a directory
export default class UpperCard extends React.Component{


  //constructor
  constructor(){
    super();
    //to-do try state
  }
    //render is a return function with jsx code
    render(){
      return(
        <section className="upperCard cardShadow mrgb100">
          <span className={this.props.icon + " box cardShadow"}></span>
          <h1 className="title gray">{this.props.title}</h1>
          <div className="data">
          <span className="number black">{this.props.number}</span>
          <span className="unit black">{this.props.unit}</span>
          </div>
          <footer>
            <span className={this.props.footerIcon+" gray"}>{this.props.footer}</span>
          </footer>
        </section>
        
      );
    }
  } 
  
  
  
  