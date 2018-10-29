import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../home";
import Book from "../daySelect";
import Time from "../timeSelect";
import Form from "../form";
import Admin from "../admin";
import "./parent.css";

class Parent extends Component {
  constructor(props) {
    super(props);
  this.state = {
    date: "",
    time: "",
    email: "",
    password: ""
  };
}

  login(credentials) {
    this.setState({
      email: credentials
    })
  };

  onUpdate(dateChosen) {
    this.setState({
      date: dateChosen
    });
  };

  onTimeUpdate(time) {
    this.setState({
      time: time
    })
  };

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
            <Route exact path="/form" render={(props) => <Form {...props} date={this.state.date} time={this.state.time}/>} />
            <Route exact path="/admin" component={Admin} />
      </div>
    );
  }
}


export default Parent;
