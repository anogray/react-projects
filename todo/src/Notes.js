import React from 'react';
import "./App.css"

const Notes = ({allnotes, removenotes})=>{
    // console.log(allnotes[0].content)
    
    
     const printNotes = allnotes.length ? allnotes.map(note=>{
        return(
        <div className="notes-app" key={note.id}>
        <span onClick={()=>{removenotes(note.id)}}>
           { note.content}
        </span>
        </div>
        )

    })
    :
    <p>No notes left to work on !</p>

     
    
    //console.log(printNotes)
    
    return(
        <div className = "print-notes">
            {printNotes}
        </div>
    )

}

export default Notes