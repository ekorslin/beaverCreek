import React, { Component } from "react";

class Time extends Component {
  // Setting the component's initial state
  state = {
    date: "",
    time: "",
  };


  onClick = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    // event.preventDefault();
    this.setState({time: event.target.value});
    this.props.history.push("/form");
    console.log(event.target.value);
  };
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs


  render() {
    return (
      <div><br/>
      <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h2 className="mbl text-center">Select a Time</h2>
        <button type="button" className="btn btn-outline-dark" onClick={this.onClick} value="0700">7:00 AM</button>
        <button type="button" className="btn btn-outline-dark" onClick={this.onClick} value="0800">8:00 AM</button>
        <button type="button" className="btn btn-outline-dark" onClick={this.onClick} value="0900">9:00 AM</button>
        <button type="button" className="btn btn-outline-dark" onClick={this.onClick} value="1000">10:00 AM</button>
        <button type="button" className="btn btn-outline-dark" onClick={this.onClick} value="1100">11:00 AM</button>
        <button type="button" className="btn btn-outline-dark" onClick={this.onClick} value="1200">12:00 PM</button>
        <button type="button" className="btn btn-outline-dark" onClick={this.onClick} value="1300">1:00 PM</button>
        <button type="button" className="btn btn-outline-dark" onClick={this.onClick} value="1400">2:00 PM</button>
        <button type="button" className="btn btn-outline-dark" onClick={this.onClick} value="1500">3:00 PM</button>
        <button type="button" className="btn btn-outline-dark" onClick={this.onClick} value="1600">4:00 PM</button>
      </div>
      </div>
      <div className="col-md-2"></div>
      </div>

      
    );
  }};


export default Time;
