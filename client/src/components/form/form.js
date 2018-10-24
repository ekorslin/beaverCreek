import React, { Component } from "react";
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class Form extends Component {

  constructor() {
    super();

  // Setting the component's initial state

  this.state = {
    modalIsOpen: false
  };

  this.openModal = this.openModal.bind(this);
  this.afterOpenModal = this.afterOpenModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
}

openModal(event) {
  event.preventDefault();
  this.setState({modalIsOpen: true});
}

afterOpenModal() {
  // references are now sync'd and can be accessed.
  this.subtitle.style.color = 'black';
}

closeModal() {
  this.setState({modalIsOpen: false});
  this.props.history.push("/")
}

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
          <button type="submit" onClick={this.openModal} className="btn btn-outline-dark">Submit</button>
        </form>
        </div>
        <div className="col-md-4"></div>
        </div>

     <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src="logo.png" alt="Logo"/>
          <h2 ref={subtitle => this.subtitle = subtitle}>You are booked!</h2>
          <form>
            We look forward to seeing you on.  ad;lkjads;lfkjad;lfja;sldkjf.
            <br /><br />
            <button className="btn btn-outline-dark" onClick={this.closeModal}>Close</button>
          </form>
      </Modal>

</div>

      


  
    );
  }};


export default Form;
