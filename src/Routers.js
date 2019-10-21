import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect
  } from "react-router-dom";

import Login from './Containers/Login/Login';
import About from './Containers/About/About';
import AddTodo from './Containers/AddTodo/index';




class Routers extends Component {
    render(){
        return(
            <Switch>
                <Route path="/"  exact strict component={Login}></Route>
                {/* <Route path="/login" component={Login}></Route> */}
                <Route path="/about" component={About}></Route>
                <Route path="/addTodo" component={AddTodo}></Route>
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