import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import "./products.scss"

const Products = () => {
    const [range, setRange] = useState(500);
    const [sort, setSort] = useState(null);
    const cardId = parseInt(useParams().id)
    
    
    return (
        <div className='products'>
            <div className="left">
                <div className="filterItem">
                    <h2>product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="1" value={1} />
                        <label >Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="2" value={2} />
                        <label >Skirt</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" name="" id="3" value={3} />
                        <label >Coats</label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter By price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range"  id="range" min={0} max={1000} value={range} onChange={(e) =>setRange(e.target.value) }  />
                        <span>{range}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort By</h2>
                    <div className="inputItem">
                        <input type="radio" name="asc" id="asc" value="asc" onChange={(e) => setSort("asc")}/>
                        <label htmlFor="asc">Price (Lower First)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" name="desc" id="desc" value="desc" onChange={(e) => setSort("desc")}/>
                        <label htmlFor="desc">Price (Highest First)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img
                    className="catImg"
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />
                <List />
            </div>
            
        </div>
    );
}

export default Products;
