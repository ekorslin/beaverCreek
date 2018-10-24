import React, { Component } from "react";

class Form extends Component {
  // Setting the component's initial state



  onClick = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
 
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    console.log(event[0]);
    console.log(event.target.email);
    console.log(event.target.telephone);
    console.log(event.target.numberGolfers);
    console.log(event.target.additionalComments);
    console.log(event.target.cart);

  };

  render() {
    return (
      <div><br/>
        <h2 className="mbl text-center">Complete the Following<br/>to Complete your Booking:</h2><br/>
        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Your Full Name"/>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email Address"/>
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" className="form-control" id="telephone" placeholder="Phone Number"/>
          </div>
          <div className="form-group">
            <label>No. of Golfers</label>
            <select className="form-control" id="numberGolfers">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="form-group">
            <label>Anything Additional?</label>
            <textarea className="form-control" id="additionalComments" rows="3"></textarea>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" id="cart" className="form-check-input"/>
              Will you Require Cart(s)?
            </label>
          </div><br/>
          <button type="submit" onClick={this.onClick} className="btn btn-primary">Submit</button>
        </form>
        </div>
        <div className="col-md-4"></div>
        </div>
        </div>


  
    );
  }};


export default Form;
