import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Food.css';
const Food = (props) => {
  
    const {name,picture,price} = props.food;
    console.log(props)
    return (
        <div className='food'>
            
            <img src={picture} alt="" />
            <h1>Name:{name}</h1>
            <h2>Piece:{price}</h2>
           <button onClick={()=>props.handleAddToCart(props.food)} className='btn-cart'>   
               <p className='btn-text'>Add to cart</p>
               <FontAwesomeIcon 
               icon={faShoppingCart}
               ></FontAwesomeIcon>
           </button>

        </div>
    );
};

export default Food;