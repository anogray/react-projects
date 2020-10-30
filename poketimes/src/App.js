import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Post from "./components/Post"

class App extends Component {
  render() {
    // console.log(" rendering now ")
    console.log("App stored ", this.props)
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/:post_id" component = {Post} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
