import React, { Component } from "react";
import ReactWeeklyDayPicker from "react-weekly-day-picker";
import "./daySelect.css";

class Book extends Component {
  // Setting the component's initial state
  state = {
    date: "",
  };

  onClick = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    // event.preventDefault();
    this.props.history.push("/time")
    console.log(event[0]);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8"><br/>
            <h2 className="mbl text-center">Select a Day</h2>
            <ReactWeeklyDayPicker mobilView={window.innerWidth < 100} format={'MM-DD-YYYY'} selectDay={this.onClick} />
          </div>
          <div className="col-md-2"></div>
        </div>

      </div>
    );
  }
}


export default Book;
