import React, { Component } from 'react';
import './App.css';

class Addnote extends Component{

    state={
        content:""    
    }
    
    handleform=(e)=>{
    this.setState({
        content:e.target.value
    })
    
    }

    submitform=(e)=>{
        e.preventDefault();
        //console.log(this.state.content)
        this.props.addednote(this.state)
        this.setState({
            content:""
        })
        //console.log("removing state " +this.state.content)
    }
    


    render(){
        //console.log(this.state.content)
        return(
            <div>
            <form onSubmit={this.submitform}>
             <label >
                 Write your todo
             </label><br></br>  
             <input type="text"  onChange={this.handleform} value={this.state.content} ></input> 
             <button>Add</button>
            </form>
            </div>
        )
    }
}

export default Addnote;