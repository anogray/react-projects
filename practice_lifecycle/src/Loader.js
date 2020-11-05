import React, { useState, useEffect } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap"

const Loader = () => {

    const [lyricsItem, setLyrics] = useState(null);
    const [loading, setLoading] = useState(false);

    const lyricsFunction = async () => {

        try {
            const lyricsFunction = await axios.get("https://jsonplaceholder.typicode.com/posts/2")
                .then(res => {
                    console.log(res);
                    setLyrics(res.data.title);
                    setLoading(true)
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        lyricsFunction();
    })

    return (
        <div className="Loading class">
            {loading ? (lyricsItem) :
                <ReactBootStrap.Spinner animation="border" />}
        </div>
    );
}

export default Loader;
