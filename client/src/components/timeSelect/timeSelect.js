import React, { Component } from "react";

class Time extends Component {


  // onClick function that will take the time selected by the user and move the user to the "/form" route. It also stores the time in a prop that will be passed on. 
  onClick = (event) => {
    var time = event.target.value;
    this.props.history.push("/form");
    this.props.timeClick(time);
  };

  render() {
    return (
      <div>
        <div>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                  <div className="carousel-caption d-none d-md-block">
                    <div className="content">
                      <div className="row">
                        <div className="col-md-2"></div>
                          <div className="col-md-8">
                            <h2 className="text-center" id="content">Select a Time for {this.props.date}</h2>
                              <button type="button" className="btn btn-outline-dark text-light" onClick={this.onClick.bind(this)} value="0700">7:00 AM</button>
                              <button type="button" className="btn btn-outline-dark text-light" onClick={this.onClick} value="0800">8:00 AM</button>
                              <button type="button" className="btn btn-outline-dark text-light" onClick={this.onClick} value="0900">9:00 AM</button>
                              <button type="button" className="btn btn-outline-dark text-light" onClick={this.onClick} value="1000">10:00 AM</button>
                              <button type="button" className="btn btn-outline-dark text-light" onClick={this.onClick} value="1100">11:00 AM</button>
                              <br />
                              <button type="button" className="btn btn-outline-dark text-light" onClick={this.onClick} value="1200">12:00 PM</button>
                              <button type="button" className="btn btn-outline-dark text-light" onClick={this.onClick} value="1300">1:00 PM</button>
                              <button type="button" className="btn btn-outline-dark text-light" onClick={this.onClick} value="1400">2:00 PM</button>
                              <button type="button" className="btn btn-outline-dark text-light" onClick={this.onClick} value="1500">3:00 PM</button>
                              <button type="button" className="btn btn-outline-dark text-light" onClick={this.onClick} value="1600">4:00 PM</button>
                          </div>
                        </div>
                      <div className="col-md-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }};

export default Time;
