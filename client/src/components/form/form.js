import React, { Component } from "react";
import Modal from 'react-modal';
import axios from 'axios';
import "./form.css";
import AddToCalendar from 'react-add-to-calendar';



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

class Form extends Component {

  constructor() {
    super();

  // Setting the component's initial state

  this.state = {
    modalIsOpen: false,
    ariaHideApp: false,
    name: "",
    email: "",
    phone: "",
    numberGolfers: "",
    comments: "",
    cart: "",
    event: {
      title: 'Golf Outing',
      description: 'Enjoying a round of golf at Beaver Creek Golf Club.',
      location: 'Capron, IL',
      startTime: '2018-09-16T20:45:00-04:00',
      endTime: "2018-09-16T21:45:00-04:00"
    }
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
  this.setState({numberGolfers: this.refs.name.value});
  this.setState({comments: this.refs.additionalComments.value});
  this.setState({cart: this.refs.cart.value});
  let year = this.refs.date.value.slice(0,4);
  let month = this.refs.date.value.slice(6,8);
  let day = this.refs.date.value.slice(10,12);

  let hour = this.refs.time.value.slice(0,2);
  let minute = this.refs.time.value.slice(3,5);
  this.setState({ event: { startTime: this.refs.date.value +"T"+hour+":"+minute+":00-4:00" } })
  console.log("Name: " + this.state.name);
  var userInfo = {
    date: this.refs.date.value,
    time: this.refs.time.value,
    name: this.refs.name.value,
    email: this.refs.email.value,
    phone: this.refs.telephone.value,
    numberGolfers: this.refs.numberGolfers.value,
    comments: this.refs.additionalComments.value,
    cart: this.refs.cart.checked
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
                        <h2 class="formHeader" className="mbl text-center" ref="header" value={this.props.date}>Complete the Following<br/>to Finalize your Booking for {this.props.date}:</h2><br/>
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
                          <label className="text-dark font-weight-bold font-italic">Number of Golfers</label>
                          <select className="form-control" ref="numberGolfers">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="text-dark font-weight-bold font-italic">Anything Additional?</label>
                          <textarea className="form-control" ref="additionalComments" rows="3"></textarea>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" ref="cart" className="form-check-input"/>
                            Will you Require Cart(s)?
                          </label>
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
                      <h2 ref={subtitle => this.subtitle = subtitle}>You are booked!</h2>
                      <form>
                        Thank you, {this.state.name}.  We look forward to seeing you on {this.props.date}.
                        <br /><br />
                        
                        <button className="btn btn-outline-dark" onClick={this.closeModal}>Close</button>
                        <AddToCalendar event={this.state.event}/>
                      </form>
                  </Modal>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }};


export default Form;
