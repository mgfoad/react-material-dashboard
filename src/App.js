import React, { Component } from 'react';
import UpperCard from './components/UpperCard';
import LineChartCard from './components/LineChartCard';
import BarChartCard from './components/BarChartCard';
import Nav from './components/Nav';
import logo from './logo.svg';
import './css/App.css';
import chartData from './chart.json';


class App extends Component {

  
  render() {
    
    //convert json into js object 
    var ChartData = Object.values({chartData}.chartData);
    var lineChartData1 = ChartData[0];
    var lineChartData2 = ChartData[1];
    var barChartData1 = ChartData[2];
   


    return (
      <div className="page-cont">

<div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 noPad">
            <Nav />
          </div>
          <div className="col-lg-10">

            <div className="row">
              <div className="col-xs-12">
                <h1 className="mainLbl">Material Dashboard</h1>
              </div>
              <div className="col-lg-3">
                <UpperCard icon="space" title="Used Space" number="49/50" unit="GB" footer="Get More Space" footerIcon="warningIco" />
              </div>
              <div className="col-lg-3">
                <UpperCard icon="revenue" title="revenue" number="12" unit="$" footer="last 24 hours" footerIcon="revenueIco" />
              </div>
              <div className="col-lg-3">

                <UpperCard icon="issues" title="fixed issues" number="75" unit="" footer="tracked from github" footerIcon="issuesIco" />
              </div>
              <div className="col-lg-3">
                <UpperCard icon="follower" title="follower" number="245" unit="+" footer="just updated" footerIcon="followerIco" />
              </div>

              <div className="col-lg-4">
                <LineChartCard chartData={lineChartData1} BgColor="green" title="Daily Sales" state="increase in today sales" footer="updated 4 mins ago" />
              </div>

              <div className="col-lg-4">
                <BarChartCard chartData={barChartData1} BgColor="orange" title="Email subscriptions" state="increase in today sales" footer="updated 4 mins ago" />
              </div>

              <div className="col-lg-4">
                <LineChartCard chartData={lineChartData2} BgColor="red" title="Completed Tasks" state="increase in today sales" footer="updated 4 mins ago" />
              </div>
              
            </div>

            </div></div>
        </div>

      </div>
    );
  }
}

export default App;
