import React, { Component } from "react";
import Modal from 'react-modal';
import axios from "../../api/axios";
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
  // Constructor for this componenet.
      constructor() {
        // super() is called to set the this.props to undefined.
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
          startTime: "",
          endTime: ""
        }
      };
      // Setting the Modal to the current state of the commponent.
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }


    openModal(e) {
      e.preventDefault();
      // Setting variables for the Calender invite.
      let startHour = this.refs.time.value.slice(0,2)
      let startHourInteger = parseInt(startHour) + 6;
      let endHourInteger = parseInt(startHour) + 8;
      let endHour = endHourInteger.toString();
      let event = {...this.state.event}
      event.startTime = this.refs.date.value+"T"+startHourInteger+":00:00";
      event.endTime = this.refs.date.value+"T"+endHour+":00:00";
      // Setting state of the component here to the user.
      this.setState({
        modalIsOpen: true,
        name: this.refs.name.value,
        email: this.refs.email.value,
        phone: this.refs.telephone.value,
        numberGolfers: this.refs.name.value,
        comments: this.refs.additionalComments.value,
        cart: this.refs.cart.value,
        event,
      }, () => {
        console.log(startHour, endHour);
        console.log(this.refs.date.value+"T"+startHour+":00:00-4:00");
        console.log(this.state.event);
      });
      // Setting the userInfo object based on inputs
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
      // Post route that will enter the TeeTime userInfo into the database.
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
    // Function that will change the styling inside of the modal. 
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = 'black';
    }
    // Function that will send user back to the home page on click.
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
              <div className="carousel-caption d-none d-md-block">
                <div><br/>
                  <div className="row align-items-center">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                      <div class="flex-container">
                        <h2 class="formHeader" className="mbl text-center" ref="header" value={this.props.date}>Complete the Following to Finalize your Booking for {this.props.date}:</h2><br/>
                      </div>
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
                          <input type="checkbox" ref="cart" className="form-check-input"/>Cart Needed?</label>
                        </div>
                        <br/>
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
                    <br />
                    <br />
                    <div className="text-center">
                      <button className="btn btn-outline-dark" onClick={this.closeModal}>Close</button>
                    <hr />
                    </div>
                    <div className="text-center">
                    <AddToCalendar event={this.state.event}/>
                    </div>
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
