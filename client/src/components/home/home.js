import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  // Setting the component's initial state
  state = {
    date: "",
  };


  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="carousel-caption d-none d-md-block">
                  <h1>Welcome to<br/>Beaver Creek Golf Course!</h1><br/>
                  <a href="/book" id="homebutton" className="btn btn-dark pull-left" role="button">BOOK TEE-TIME</a><br/><br/>
                  <p></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
