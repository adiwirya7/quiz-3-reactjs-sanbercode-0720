import React,{ useState } from "react";
import {Switch, NavLink , Route} from "react-router-dom";
import logo from "../src/img/logo.png"
import About from "../src/About"
import Home from "../src/Home"
import Movie from "../src/Movie"
import Login from "../src/Login"
import { UserContext } from '../src/UserContext'


const Routes = ()  =>{
    const [User, setUser] = useState(UserContext);
    if (User.status === false) {
        
    } else {
        
    }
    return (
        <>
        <header>
        <img src={logo} style={{width:200}}/>
        <nav>
            <ul>
                <li >     
                <NavLink exact activeClassName="active" className=" " to="/">Home</NavLink>
                </li>
                <li>    
                <NavLink activeClassName="active" className=" " to="/about">About</NavLink>
                </li>
                <li>    
                <NavLink activeClassName="active" className=" " to="/movie">Movie List Editor</NavLink>
                </li>
                <li>    
                <NavLink activeClassName="active" className=" " to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
        </header>
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/movie">
                <Movie/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
        </>
    );
};

export default Routes;