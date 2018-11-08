import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Contact from "./components/Contact";
import Parent from "./components/parent";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faGhost, faRing, faFutbol, faBasketballBall, faGolfBall } from '@fortawesome/free-solid-svg-icons';
import "./App.css";

library.add(faEnvelope, faKey, faGhost, faRing, faFutbol, faBasketballBall, faGolfBall);

const App = () => (
 <Router>
     <div>
        <Navbar />
         <Wrapper>
            <Parent />
         </Wrapper>
        <Footer />
    </div>
</Router>
);

export default App;
