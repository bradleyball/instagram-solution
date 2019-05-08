import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import dummyData from './dummyData'


class App extends React.Component {
  constructor() {
    super();
    this.state={
      data: dummyData,
      inputText: '',
      inputUsername: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("handleChange invoked here: ", e.target.name);
  };

  addComment = (e,post) => {
    e.preventDefault();
    
       post.comments.push({
         username:this.state.inputUsername,
         text:this.state.inputText
       })
       console.log("added")
    this.setState({...this.state, inputText:"", inputUsername: "" })
  };


  render(){
    return (
      <div className="app-container">
        <SearchBar 
          inputText={this.state.data.inputText}
          searchFn={this.searchFn}
          handleChange={this.handleChange} />
        
        {this.state.data.map(post => {
          return <PostContainer {...this.state} post={post} key={post.timestamp} handleChange={this.handleChange} addComment={this.addComment} />
        })}
      
      </div>
    )
  }
}

export default App;
