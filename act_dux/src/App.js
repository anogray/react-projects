// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import FirstCmp from "./Firstcmp.js"
import AddForm from "./AddForms.js"

class App extends Component {

  state = {
    champion: [
      { name: "Kingkong", age: 25, belt: "black", id: 1 },
      { name: "Flash", age: 20, belt: "green", id: 2 },
      { name: "Superman", age: 200, belt: "dark", id: 3 }
    ]
  }

  addchamp = (formdata) => {
    formdata.id = this.state.champion.length + 1;
    //this.state.champion.push(formdata)
    //can use above but bad practice
    let chmp = [...this.state.champion, formdata]
    this.setState({
      champion: chmp
    })
    console.log(formdata)
    //formdata.id=this.state.length+1;

  }

  delchamp = (id) => {

    let rem = this.state.champion.filter(chmp => {
      return chmp.id != id
    })

    this.setState({
      champion: rem
    })

  }

  render() {
    return (
      <div className="App">

        <FirstCmp allchamps={this.state.champion} delchamp={this.delchamp} />
        <AddForm addchamp={this.addchamp}  />
      </div>
    );
  }
}

export default App;
