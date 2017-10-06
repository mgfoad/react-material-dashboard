import React from 'react';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class ChartCard extends React.Component{

 
 

    render(){

    
      return(
        <section className="chartCard cardShadow mrgb100">
          <div className= {this.props.BgColor+"BG box cardShadow "}>
         
      <ResponsiveContainer>
      
      <BarChart width={600} height={300} data={this.props.chartData} margin={{  top: 15, right: 10, bottom: 5, left: -20}}>
 <XAxis dataKey="name" padding={{ right: 20, left:20 }} tick={{fill: '#fff', strokeWidth: 0}}/>
 <YAxis tick={{fill: '#fff', strokeWidth: 0}} />
 <CartesianGrid stroke="rgba(255, 255, 255, 0.5)" strokeDasharray="2 2" />
 <Bar barSize={10} dataKey="uv" fill="#fff" />
</BarChart>
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
  
  
  
  