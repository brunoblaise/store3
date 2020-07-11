import React, { Component } from 'react'
import './main.css'

export default class Main extends Component {
    render() {
        return (
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
            </div>
            <div className="SearchBar-fields">
              <input placeholder="Search products"  />
              <input placeholder="Where" />
            </div>
            <div className="SearchBar-submit">
              {this.props.greats.map((great)=>(
                  <a href={"#"+ great._id}>{great.name}</a>
              ))}
            
          </div>
          </div>
        )
    }
}
