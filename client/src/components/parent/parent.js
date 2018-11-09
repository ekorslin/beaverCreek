import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../home";
import Book from "../daySelect";
import Time from "../timeSelect";
import Contact from "../Contact";
import AdminScreen from "../adminScreen";
import Form from "../form";
import Admin from "../admin";
import AdminSignup from "../admin-signup";
import "./parent.css";

class Parent extends Component {
  // Component's constructor.
  constructor(props) {
    // super(props) called to ensure that this.props is undefined in this constructor.
    super(props);
    // Setting the state for this component with empty date, time, email, and password keys.
  this.state = {
    date: "",
    time: "",
    email: "",
    password: ""
  };
}

// Function setting state of the email key.
  login(credentials) {
    this.setState({
      email: credentials
    })
  };

  // Function setting the state of the date key.
  onUpdate(dateChosen) {
    this.setState({
      date: dateChosen
    });
  };

  // Function setting the state of the time key.
  onTimeUpdate(time) {
    this.setState({
      time: time
    })
  };

  // Function ensuring that the component mounts with the updated state key value pairs.
  componentDidUpdate() {
    console.log(this.state.date);
    console.log(this.state.time);
    console.log(this.state.email)
  };



  render() {
    return (
      <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/book" render={(props) => <Book {...props} click={this.onUpdate.bind(this)} />} />
            <Route exact path="/time" render={(props) => <Time {...props} date={this.state.date} timeClick={this.onTimeUpdate.bind(this)} />} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/form" render={(props) => <Form {...props} date={this.state.date} time={this.state.time}/>} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/adminScreen" component={AdminScreen} />
            <Route exact path="/signup" component={AdminSignup} />
      </div>
    );
  }
}


export default Parent;
