import React, { Component } from "react";
import ReactWeeklyDayPicker from "react-weekly-day-picker";

import "./daySelect.css";

class Book extends Component {

  onClick = (date) => {
    var dateChosen = date[0];
    this.props.history.push("/time")
    this.props.click(dateChosen);
  };

  render() {
    return (
      <div>
        <div>
          <a class="weatherwidget-io" href="https://forecast7.com/en/42d40n88d74/capron/?unit=us" data-label_1="CAPRON" data-label_2="WEATHER" data-icons="Climacons Animated" data-theme="sky" >CAPRON WEATHER</a>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block w-100 img-fluid" src="./put.jpg" alt="First slide"/>
              <div className="carousel-caption d-none d-md-block">
                <div>
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8"><br/>
                      <h2 className="mbl text-center">Select a Day</h2>
                      <ReactWeeklyDayPicker mobilView={window.innerWidth < 100} format={'YYYY-MM-DD'} selectDay={this.onClick.bind(this)} />
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
  }
}

export default Book;
