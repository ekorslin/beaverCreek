import React, { Component } from "react";
// import axios from 'axios';
import axios from "../../api/axios";
// import "./stylesheets/style.css";
import "./AdminScreen.css";

class AdminScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    }}

logout = (event) => {
  event.preventDefault();
  axios.post('/logout', {})
    .then((response) => {
      alert("You are now successfully logged out.");
      sessionStorage.setItem('jwt', '');
      this.props.history.push("/");
    })
    .catch(function (error) {
        console.log(error);
    })
  };


  onSubmit = (event) => {
    event.preventDefault();
    this.getData();
  }

  onDelete = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    var deleteId = {
      deleteId: event.target.value,
    }
    axios.post('/adminScreen/delete', {
      adminSelected: deleteId
    })
    .then((response) => {
      this.getData();
    })
  .catch(function (error) {
      console.log(error);
  })};

  getData () {
      var date = {
        date: this.refs.date.value,
      }
      axios.post('/adminScreen', {
        adminSelected: date
      })
      .then(function (response) {
        console.log(response.data);
            this.setState({
                data: response.data, loading: false
            })}.bind(this))
    .catch(function (error) {
        console.log(error);
    })}

  render() {
    if (!sessionStorage.jwt) this.props.history.push('/admin');
    return (
    <div>
    <div className="row">
      <div className="col-md-2"></div>
    <br/>
      <div className="col-md-8">
      <div className="display">
        <h2 className="mbl text-center">Select a Day to Manage Tee-Times</h2>
        <form>
          <input className="center" type="date" ref="date"/>
          <br />
          <button type="submit" onClick={this.onSubmit.bind(this)} className="btn btn-outline-light center">Manage Date</button>
        </form><br/>
        <table>
        <tbody>
        <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Golfers</th>
            <th>Cart</th>
            <th>Delete</th>
          </tr>
          {this.state.data.map((data, index) => (
          <tr>
            <td>{data.date}</td>
            <td>{data.time}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.numberGolfers}</td>
            <td>{data.cart.toString()}</td>
            <td><button value={data.id} onClick={this.onDelete.bind(this)}>X</button></td>
          </tr>
          ))}
        </tbody>
        </table>
        <br/>
        <button type="submit" onClick={this.logout.bind(this)} className="btn btn-outline-light center">Logout</button>
        <br />
        </div>
        </div>
        </div>
      </div>
    );
  }}

export default AdminScreen;
