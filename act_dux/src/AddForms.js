import React, { Component } from 'react';
import "./App.css"

class AddForm extends Component{

    state ={
        name:null,
        age:null,
        belt:null
    }
    
    handleChange=(e)=>{
        this.setState({
        [e.target.id] : e.target.value
    })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addchamp(this.state);
    }



    render(){
        return(
            <div >
                <form onSubmit={this.handleSubmit} class="formstyle">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}></input><br></br>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}></input><br></br>
                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddForm;