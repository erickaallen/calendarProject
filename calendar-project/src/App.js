import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Table, TableProps } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar';

export const Months = {
  "01": {"Name": "January", "Days": 31},
  "02": {"Name": "February", "Days": 28},
  "03": {"Name": "March", "Days": 31},
  "04": {"Name": "April", "Days": 30},
  "05": {"Name": "May", "Days": 31},
  "06": {"Name": "June", "Days": 30},
  "07": {"Name": "July", "Days": 31},
  "08": {"Name": "August", "Days": 31},
  "09": {"Name": "September", "Days": 30},
  "10": {"Name": "October", "Days": 31},
  "11": {"Name": "November", "Days": 30},
  "12": {"Name": "December", "Days": 31}
}

class App extends Component {
  constructor(props) {
    super(props);

    this.getFormattedDate = this.getFormattedDate.bind(this);
    this.calculateEndDate = this.calculateEndDate.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleNumberOfDaysChange = this.handleNumberOfDaysChange.bind(this);
    this.handleCountryCodeChange = this.handleCountryCodeChange.bind(this);

    this.state = {
      startDate: this.getFormattedDate(),
      numberDays: 30,
      countryCode: ""
    };
  }

  getFormattedDate() {
    let rawDate = new Date();
    let year = rawDate.getFullYear().toString();
    let rawMonth = (rawDate.getMonth() + 1).toString();
    let month;
    if (rawMonth.length === 1) {
      month = "0" + rawMonth;
    } else {
      month = rawMonth;
    }
    let date = rawDate.getDate().toString();
    let formattedDate = year + "-" + month + "-" + date;
    console.log(formattedDate);
    return formattedDate;
  }

  calculateEndDate() {
    let rawDate = new Date();
    let endDate = new Date(rawDate.setTime( rawDate.getTime() + this.state.numberDays * 86400000 ));
    console.log(endDate);
    return endDate;
  }

  handleStartDateChange(event) {
    console.log("date changed!");
    this.setState({
      startDate: event.target.value
    });
  }

  handleNumberOfDaysChange(event) {
    console.log("number of days changed!");
    this.setState({
      numberDays: event.target.value
    });
  }

  handleCountryCodeChange(event) {
    console.log("country code changed!");
    this.setState({
      countryCode: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Event Calendar</h1>
        </header>
        <form className="form">
          <FormGroup className="form-group">
            <ControlLabel>Start Date</ControlLabel>
            <FormControl 
              type="date"
              value={this.state.startDate}
              onChange={this.handleStartDateChange}
            />
          </FormGroup>
          <FormGroup className="form-group">
            <ControlLabel>Number of Days</ControlLabel>
            <FormControl 
              type="number" 
              value={this.state.numberDays}
              onChange={this.handleNumberOfDaysChange}
            />
          </FormGroup>
          <FormGroup className="form-group">
            <ControlLabel>Country Code</ControlLabel>
            <FormControl 
              type="text" 
              value={this.state.countryCode}
              placeholder="Enter your country code"
              onChange={this.handleCountryCodeChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>End Date:</ControlLabel>
            <FormControl type="text" value={this.calculateEndDate()} readOnly />
        </FormGroup>
        </form>
        <Calendar />
      </div>
    );
  }
}

export default App;
