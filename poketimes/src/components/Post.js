import React, { Component } from 'react';
import axios from "axios"
import {connect} from "react-redux"
import {deletePost} from "../actions/postActions"

class Post extends Component {

handleClick=()=>{
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/")
}

    // state = {
    //     post: ''
    // }

    // componentDidMount() {
    //     // console.log(this.props)
    //     let id = this.props.match.params.post_id;
    //     axios("https://jsonplaceholder.typicode.com/posts/" + id)
    //         .then(res => {
    //             this.setState({
    //                 post: res.data
    //             })
    //         })

    //     // this.setState({
    //     //     id:id
    //     // })
    // }


    render() {
console.log(this.props)
        //const posts = this.state.post
        const posts = this.props.post ? (
            <div className="post">
                {/* <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p> */}
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>


            </div>
        ) :
            (
                <div className="center">Lodaing post...</div>
            )
        return (
            <div className="container">
                {posts}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=>{
    let id= ownProps.match.params.post_id;
    return{
        post:state.posts.find(post=>post.id===id)
    }
}

const mapDispatchProps = (dispatch)=>{
return{
    //deletePost:(id)=>{ dispatch({type: "DELETE_POST", id:id})}
    //deletePost:(id)=>{ dispatch({type: "DELETE_POST", id:id})}
    deletePost:(id)=>{ dispatch(deletePost(id))}

}
}


//export default Post
// export default connect(mapStateToProps)(Post)
export default connect(mapStateToProps,mapDispatchProps)(Post)