import React from 'react'
import './AddComment.css'

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
        
    }


addComment = e => {
    e.preventDefault();
    
       this.props.post.comments.push({
         username:this.props.inputUsername,
         text:this.props.inputText
       })
       console.log("added")
    
  };

render() {
    return (
        <form className="comment-form" onSubmit={e =>this.props.addComment(e,this.props.post)}>
            <p><strong>Add comment...</strong></p>
            <input 
                type="text" 
                name="inputUsername"
                placeholder="username"
                value={this.props.inputUsername}
                onChange={this.props.handleChange}
            /> 
            <input 
                type="text"
                name="inputText"
                placeholder="comment"
                value={this.props.inputText}
                onChange={this.props.handleChange}
            />
            <button type="submit">Submit</button>        
        </form>
        )
    }
}

export default AddComment