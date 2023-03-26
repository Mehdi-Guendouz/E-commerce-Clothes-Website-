import React, {useState} from 'react';
import "./product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
    const [selectImg, setselectImg] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const images= [
        "data:image/jpeg;base64,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"
        ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5uplt17l9bWYAc9NLMPa53j_06f1Je_v3w&usqp=CAU"
    ]

    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e => setselectImg(0)} />
                    <img src={images[1]} alt="" onClick={e => setselectImg(1)}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectImg]} alt="" />
                </div>
            </div>
            
            <div className="right">
                <h2>Title</h2>
                <span className='price'>50$</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sequi in exercitationem dicta consequuntur asperiores totam laborum earum ducimus voluptatum.</p>
                <div className="quantitiy">
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon />
                    Add to cart
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD to wish list
                    </div>
                    <div className="item">
                        <BalanceIcon /> Add to compare
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    );
}

export default Product;
