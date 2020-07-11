import React, { Component } from 'react'
import './content.css'




export default class Content extends Component {
    render() {
        return (
  
         
    <>

<ul className="products">
              {this.props.businesses.map((business) => (
                <li key={business._id}>
                  <div className="product">
                    <a
                      href={"#" + business._id}
                    >
                      <img src={business.image} alt={business.title}></img>
                      <p>{business.title}</p>
                    </a>
                    <div className="product-price">
                      <div>{business.price}</div>
                      <button
                   
                        className="button primary"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>




  
   
    </>
    
     
  

   
        )
    }
}
