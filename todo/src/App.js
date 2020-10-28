import { Component } from 'react';
import './App.css';
import Addnote from './Addnote.js'
import Notes from "./Notes"

class App extends Component {

  state = {
    notes:[{
    content:"In order to add notes click Add ",
    id:"1"
    },
    {
      content:"In order to remove notes click any note",
      id:"2"
      }]
}

addnotes=(data)=>{
  data.id=this.state.notes.length+1;
  const newnote = [...this.state.notes, data];
  this.setState({
    notes:newnote
  })
  
}

deletenote=(id)=>{

  const leftNotes = this.state.notes.filter(note=>{
    return note.id!==id
  })

  this.setState({
    notes:leftNotes
  })
  console.log(this.state.notes)

}

render(){
  return (
    <div className="App">
     <Notes allnotes={this.state.notes} removenotes={this.deletenote}/>
     <Addnote addednote={this.addnotes}/>
    </div>
  );
}
}  


export default App;
