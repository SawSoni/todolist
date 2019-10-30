import React, { Component } from "react";
import {
    Switch,
    Route,
  } from "react-router-dom";

import Login from './Containers/Login/Login';
import About from './Containers/About/About';
import ConnectedTodo from './Containers/AddTodo/index';
import User from './Containers/User/index';




class Routers extends Component {
    render(){
        return(
            <Switch>
                <Route path="/"  exact strict component={Login}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/addTodo" component={ConnectedTodo}></Route>
                <Route path="/user" component={User}></Route>
                <Route
                 render={function () {
                     return <h1>Not Found</h1>;
                 }}
                 />
            </Switch>
        )
    }
}

export default Routers