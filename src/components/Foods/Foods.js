import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {
    const [foods,setFoods]= useState([]); 
    const [cart,setCart] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setFoods(data))
        
    },[]);
        const handleAddToCart = (food) => {
            console.log(food)
            const newCart = [...cart,food];
            setCart(newCart);
        }

    return (

        <div className='main-container'>
           <div className='food-container'>
            {
                foods.map(food => <Food
                key = {food.id} 
                food ={food}
                handleAddToCart = {handleAddToCart}
                ></Food>)
            }
           </div>
            
            <div className='cart-container'>
                <Cart cart={cart}></Cart>

                
            </div>

        </div>
    );
};

export default Foods;