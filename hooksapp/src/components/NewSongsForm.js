import React, { useState } from 'react';

const NewSongForm = (props) => {
    //can use as destructing i.e getting props from parent ({addSong}) and use addSong(title) or use props.addSong(param)
    const [title, setTitle] = useState("");

    // const handleChange = (e) => {
    //     setTitle(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title)
        props.addSong(title)
        //changing the parents' state by sending fxn from parent and receiving as props and adding child's state/data
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Song name:</label>
            <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
            {/* <input type="text" required onChange={handleChange}/> */}
            {/* two ways with arrow fxn inline or other way arrow fxn */}

            <input type="submit" value="add song" />
        </form>
    );
}

export default NewSongForm;
