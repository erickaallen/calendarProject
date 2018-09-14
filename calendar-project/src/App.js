import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.getFormattedDate = this.getFormattedDate.bind(this);
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
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form className="">
          <FormGroup>
            <ControlLabel>Start Date</ControlLabel>
            <FormControl 
              type="date"
              value={this.state.startDate}
              onChange={this.handleStartDateChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Number of Days</ControlLabel>
            <FormControl 
              type="number" 
              value={this.state.numberDays}
              onChange={this.handleNumberOfDaysChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Country Code</ControlLabel>
            <FormControl 
              type="text" 
              value={this.state.countryCode}
              placeholder="Enter your country code"
              onChange={this.handleCountryCodeChange}
            />
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default App;
