// importing the React dependency
import React from "react";
// importing the ReactDOM dependency
import ReactDOM from "react-dom";
// import ReactWeeklyDayPicker from "react-weekly-day-picker"
import App from "./App";

// We are rendering a React element into a root DOM node, passing the react element into a root DOM node using ReactDOM.render() to render the React element. We call this a “root” DOM node because everything inside it will be managed by React DOM.
ReactDOM.render(<App />, document.getElementById("root"));
