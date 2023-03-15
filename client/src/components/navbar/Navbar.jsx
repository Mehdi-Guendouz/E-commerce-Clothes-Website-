import React from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import "./navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/en.png" alt="flag" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='links' to="/products/1" >Women</Link>
                    </div>
                    <div className="item">
                        <Link className='links' to="/products/2" >Men</Link>
                    </div>
                    <div className="item">
                        <Link className='links' to="/products/3" >Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className='links' to="/">LAMASTORE</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className='links' to="/">HomePage</Link>
                    </div>
                    <div className="item">
                        <Link className='links' to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className='links' to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='links' to="/">Store</Link>s
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className="cart-icon">
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
