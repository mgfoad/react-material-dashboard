import React from 'react';
import {ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default class ChartCard extends React.Component{

 
 

    render(){

    

    
      return(
        <section className="chartCard cardShadow mrgb100">
          <div className= {this.props.BgColor+"BG box cardShadow "}>
         
      <ResponsiveContainer>
      
    <LineChart width={600} height={300} data={this.props.chartData} margin={{  top: 15, right: 10, bottom: 5, left: -30}}>
  <Line type="linear" dataKey="uv" stroke="#fff" />
  <CartesianGrid stroke="rgba(255, 255, 255, 0.5)" strokeDasharray="2 2"  />
  <XAxis dataKey="name" padding={{ right: 20, left:20 }} tick={{fill: '#fff', strokeWidth: 0}} />
  <YAxis tick={{fill: '#fff', strokeWidth: 0}} />
  </LineChart>
  </ResponsiveContainer>
   
          </div>
          <h1 className="title black">{this.props.title}</h1>
      
          <div className="gray">{this.props.state}</div>
          
        
          <footer>
            <span className=" gray">{this.props.footer}</span>
          </footer>
        </section>
        
      );
    }
  } 
  
  
  
  