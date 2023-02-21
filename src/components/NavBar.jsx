import React from "react";
import "./nav.scss";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <header className="header-middle">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="logo pull-left">
              <a href="index.html">
                <img src={logo} alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="shop-menu pull-right">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#">
                    <i className="fa fa-user"></i> Account
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-star"></i> Wishlist
                  </a>
                </li>
                <li>
                  <a href="checkout.html">
                    <i className="fa fa-crosshairs"></i> Checkout
                  </a>
                </li>
                <li>
                  <a href="cart.html">
                    <i className="fa fa-shopping-cart"></i> Cart
                  </a>
                </li>
                <li>
                  <a href="login.html" className="login">
                    <i className="fa fa-lock"></i> Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
