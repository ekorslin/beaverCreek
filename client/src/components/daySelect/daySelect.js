import React, { Component } from "react";
import ReactWeeklyDayPicker from "react-weekly-day-picker";
import "./daySelect.css";

class Book extends Component {

  // function to carry out upon click of date selected for tee-time
  onClick = (date) => {
    var dateChosen = date[0];
    this.props.history.push("/time")
    this.props.click(dateChosen);
  };



  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-caption d-none d-md-block">
                <div>
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10"><br/>
                      <h2 className="mbl text-center">Select a Day</h2>
                      <ReactWeeklyDayPicker mobilView={window.innerWidth < 100} format={'YYYY-MM-DD'} selectDay={this.onClick.bind(this)} />
                    </div>
                    <div className="col-md-1"></div>
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
