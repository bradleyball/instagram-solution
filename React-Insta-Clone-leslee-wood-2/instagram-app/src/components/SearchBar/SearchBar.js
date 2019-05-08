import React from 'react'
import compass from './compass.png'
import Instagram_simple_icon from './Instagram_simple_icon.png'
import Instagram_text_logo from './Instagram_text_logo.png'
import open_heart from './open_heart.png'
import person from './person.png'
import './SearchBar.css'

const SearchBar = props => {
    return (
        <div className="search-bar-container">
            <div className="left-logos">
                <img className="img-logo" src={Instagram_simple_icon} alt=""></img>
                <img className="text-logo" src={Instagram_text_logo} alt=""></img>
            </div>
            <form>
                <input 
                    type="text"
                    name="inputText"
                    placeholder="search"
                    value={props.inputText}
                    onChange={props.searchFn}
                />
            </form>
            <div className="right-logos">
                <img className="img-logo" src={compass} alt=""></img>
                <img className="img-logo" src={open_heart} alt=""></img>
                <img className="img-logo" src={person} alt=""></img>
            </div>
        </div>
    )
}

export default SearchBar