import React, { Component } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import Pokeball from "../pokeball.png"
import {connect} from "react-redux"


class Home extends Component {
    // state = {
    //     posts: []
    // }

   //No need as now we are using redux
    // componentDidMount() {
    //     axios("https://jsonplaceholder.typicode.com/posts")
    //         .then(res => {
    //             console.log(res)
    //             this.setState({
    //                 posts: res.data.slice(0, 10)
    //             })
    //         })
    // }

    render() {
        console.log(this.props)

       //redux// const { posts } = this.state;
        const { posts } = this.props;
        const postsList = posts.length ? (posts.map(post => {

            return (

                <div className="post card" key={post.id}>
                <img src={Pokeball} alt="A Pokeball"/>
                    <Link to= {"/" + post.id}>
                    {/* {console.log("/" + post.id)} */}
                    {/*this added i BrowserRouter having Rout path = "/:post_id" and when clicked*/ }
                    <span className="card title red-text">
                        {post.title}
                    </span>
                    </Link>
                    <p>
                        {post.body}
                    </p>
                </div>

            )

        })
        )
            :
            (
                <div className="center">
                    <p>No posts - loading</p>
                </div>
            )


    return(
            <div className = "container home">
            <h4 className="center">Home</h4>
            {postsList}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
return {
    posts:state.posts
}
} 

export default connect(mapStateToProps)(Home)