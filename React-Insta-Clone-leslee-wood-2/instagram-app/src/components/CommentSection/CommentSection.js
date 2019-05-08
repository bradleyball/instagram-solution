import React from 'react'
import './CommentSection.css'

const CommentSection = props => {
    return (
        <div className="comment-section">
            <p><strong>{props.username} </strong></p>
            <p>{props.comment}</p>
        </div>
    )
}

export default CommentSection