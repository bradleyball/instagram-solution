import React from 'react'
import open_heart from './open_heart.png'
import quotebubble from './quotebubble.png'
import './Likes.css'

const Likes = props => {
    return (
        <div className="likes">
            <div className="icons">
                <img className="icons" src={open_heart} alt="" />
                <img className="icons" src={quotebubble} alt="" />
            </div>
            <p><strong>likes </strong>{props.likes}</p>
        </div>   
    )
}

export default Likes