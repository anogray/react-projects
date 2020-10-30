import React from 'react'
import Rainbow from "../Hoc/Rainbow"

const About = (props) => {
    console.log("about",props)

  return (
       
<div>
{console.log("about rendering")}
      <div className="container">
        <h4 className="center">About</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
      </div>
    </div>
  )
}
console.log("consoling About");

export default Rainbow(About)