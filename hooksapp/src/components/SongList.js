import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from "./NewSongsForm"

const SongList = () => {
    const [songs, setSongs] = useState([//here songs refers to state data and 
        //setStongs fxn used to modify whenever needed the state's data
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 }
    ]);

    const [age, setAge] = useState(20);

    //console.log(songs);
    //   just for in the parent state changing/adding data/state
    //const addSong = () => {
    //     setSongs([...songs, { title: 'new song', id: uuid() }]);
    //   };

    const addSong = (title) => {
        setSongs([...songs, { title: title, id: uuid() }]);
    };

    useEffect(() => {
        console.log("useEffect Hook ran", songs)
    },[songs])

    //we creating another state like age and add 1 whenever age is added by button click

    useEffect(() => {console.log("useEffect Hook ran", age)});


    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>);
                })}
            </ul>
            {/* <button onClick={()=>addSong()}>Add a song</button> */}
            <NewSongForm addSong={addSong} />
            {/* attach the props of a function which will be sent to child and which will be added to state of parent */}
            <button onClick={()=>setAge(age+1)}>Add 1 to age : {age}</button>
            {/* now whenever we click on button click the useEffect runs even if we haven't changed the state of songs so and 
            we are changing only the state of age although age is rendering and it keeps checking on state of songs*/}
            {/* So what we can do is we can stop executing useEffect of state os song everytime by adding the 2nd parameter of state of songs
            by like this
            useEffect(() => {
                console.log("useEffect Hook ran", songs)
            },[songs]
                      )
            this is whenver songs modified then only useState runs */}
        </div>
    );
}

export default SongList;