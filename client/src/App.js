import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Book from "./components/daySelect";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Time from "./components/timeSelect";
import Home from "./components/home";

const App = () => (
 <Router>
     <div>
        <Navbar />
         <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/time" component={Time} />
            <Route exact path="/book" component={Book} />
         </Wrapper>
        <Footer />
    </div>
</Router>
);

export default App;
