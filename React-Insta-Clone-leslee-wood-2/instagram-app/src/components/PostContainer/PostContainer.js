import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import Likes from '../Likes/Likes'
import AddComment from '../AddComment/AddComment'
import './PostContainer.css'


const PostContainer = props => {
    console.log("PostContainer props: ", props);
    return (
        <div className="post-container">
            <div className="post-header">
                <img src={props.post.thumbnailUrl} alt="" />
                <p><strong>{props.post.username}</strong></p>
            </div>
            <div className="main-image">
                <img src={props.post.imageUrl} alt="" />
            </div>
            <Likes likes={props.post.likes} />
             {props.post.comments.map((comment,key) => {
                 return <CommentSection comment={comment.text} username={comment.username} key={key}  addComment={props.addComment}/>
             })}
            <AddComment 
            post ={props.post}
               {...props}/>
        </div>
    )
}

export default PostContainer