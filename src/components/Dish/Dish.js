import React from 'react';
import './Dish.css'
const Dish = props => {
    return (
        <div className='dish'>
            <div className='dish-img'>
                <img  src={props.img} alt={props.dish}/>
            </div>
            <div className='dish-info'>
                <p>{props.dish}</p>
                <p><b>KGS {props.cost}</b></p>
            </div>
            <div className='dish-btn'>
                <button onClick={props.onClick}><i className="fas fa-shopping-cart"/> Add to cart</button>
            </div>
        </div>
    );
};

export default Dish;