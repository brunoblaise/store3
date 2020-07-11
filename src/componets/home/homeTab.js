import React, { Component } from 'react'
import './homeTab.css'
export default class HomeTab extends Component {
    render() {
        return (
            <div>
                <header className="main-header">
                    {this.props.products.map(( (product)=>(
 <ul>
     <img src={product.logo} alt={product._id}></img>
 <li>
     <a href={"#" + product._id}> home</a>
     </li>
     <li>
     <a href={"#" + product._id}>about</a>
     </li>
     <li>
     <a href={"#" + product._id}>service</a>
     </li>
     <div className="SearchBar-submits">
              <a href={"#"+ product}>user</a>
            </div>
</ul>
                     ) ))
                  
    }
                </header>
            </div>
        )
    }
}

