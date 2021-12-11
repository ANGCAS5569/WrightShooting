import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Firearms from "./Firearms";
import Shop from "./Shop";
import TackRack from "./TackRack";
import Contact from "./Contact";


class Main extends Component {
    render(){

        return(
            <HashRouter>            
                <nav className = "Navbar">
                    <div className = "nav-buttons">
                        <div className = "right"></div>
                        <div className= "left"></div>
                        <img src="logo.jpg" alt="" className="logo"/>
                        <ul className = "header">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/firearms">Firearms Training</NavLink></li>
                            <li><NavLink to="/shop">Shop</NavLink></li>
                            <li><NavLink to="/tackrack">TackRack</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                        <div>
                        
                                <Route exact path="/" component={Home}/>
                                <Route path="/firearms" component={Firearms}/>
                                <Route path="/shop" component={Shop}/>
                                <Route path="/tackrack" component={TackRack}/>
                                <Route path="/contact" component={Contact}/>
                       
                        </div>
                    </div>
                    
                </nav>
            </HashRouter>
        );

    }
}

export default Main;