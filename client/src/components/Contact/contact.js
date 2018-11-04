import React, { Component } from "react";
import Modal from 'react-modal';
// import axios from 'axios';
import axios from "../../api/axios";
import "./contact.css";

// Custom Styles for the modal technology that shows upon submit
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

Modal.setAppElement('#root');

class Contact extends Component {

  constructor() {
    super();

  // Setting the component's initial state

  this.state = {
    modalIsOpen: false,
    ariaHideApp: false,
    name: "",
    email: "",
    phone: "",
    comments: "",
  };

  this.openModal = this.openModal.bind(this);
  this.afterOpenModal = this.afterOpenModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
}

openModal(event) {
  event.preventDefault();
  this.setState({modalIsOpen: true});
  this.setState({name: this.refs.name.value});
  this.setState({email: this.refs.email.value});
  this.setState({phone: this.refs.telephone.value});
  this.setState({comments: this.refs.additionalComments.value});
  console.log("Name: " + this.state.name);
  var userInfo = {
    date: this.refs.date.value,
    time: this.refs.time.value,
    name: this.refs.name.value,
    email: this.refs.email.value,
    phone: this.refs.telephone.value,
    comments: this.refs.additionalComments.value,
  }
  axios.post('/submit', {
    TeeTime: userInfo
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
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
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 h-100 img-fluid" src="./put.jpg" alt="First slide"/>
                <div className="carousel-caption d-none d-md-block">
                  <div><br/>
                    <div className="row align-items-center">
                      <div class="flex-container">
                        <h2 class="formHeader" className="mbl text-center" ref="header">Contact Us</h2><br/>
                      </div>
                      <div className="col-md-6">

                      <form>
                        <div className="form-group">
                          <label className="text-dark font-weight-bold font-italic">Full Name</label>
                          <input type="text" className="form-control" name="name" ref="name" placeholder="Your Full Name"/>
                        </div>
                        <div className="form-group">
                          <label className="text-dark font-weight-bold font-italic">Email Address</label>
                          <input type="email" className="form-control" ref="email" aria-describedby="emailHelp" placeholder="Email Address"/>
                        </div>
                        <div className="form-group">
                          <label className="text-dark font-weight-bold font-italic">Phone Number</label>
                          <input type="tel" className="form-control" ref="telephone" placeholder="Phone Number"/>
                        </div>
                        <div className="form-group">
                          <label className="text-dark font-weight-bold font-italic">Description of Issue:</label>
                          <textarea className="form-control" ref="additionalComments" rows="3"></textarea>
                        </div><br/>

                      <button type="submit" onClick={this.openModal} className="btn btn-outline-dark text-light">Submit</button>

                        <input type="hidden" ref="date" value={this.props.date} />
                        <input type="hidden" ref="time" value={this.props.time} />

                      </form>
                      </div>
                      <div className="col-md-4"></div>
                      </div>
                    </div>

                 <Modal
                      isOpen={this.state.modalIsOpen}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    >
                      <img src="logo.png" alt="Logo" size="75%" />
                      <h2 ref={subtitle => this.subtitle = subtitle}>Ticket Created!</h2>
                      <form>
                        Thank you, {this.state.name}. Your issue has been raised to our team.
                        <br /><br />
                        <button className="btn btn-outline-dark" onClick={this.closeModal}>Close</button>
                      </form>
                  </Modal>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }};


export default Contact;
