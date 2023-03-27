import React from 'react';
import "./cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            <div className="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5uplt17l9bWYAc9NLMPa53j_06f1Je_v3w&usqp=CAU" alt="" />
                <div className="details">
                    <h1>Product</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, architecto.</p>
                    <div className="price">
                        399$
                    </div>
                </div>
                <DeleteOutlinedIcon className='delete' />
            </div>
            <div className="total">
                <span>SUBTOTAL</span>
                <span>100$</span>
            </div>
            <button >PROCEED TO CHECKOUT</button>
            <span className="reset">
                Reset Cart
            </span>

        </div>
    );
}

export default Cart;
