import React from "react";
import {Link} from 'react-router-dom';
// import Places from "./../pages/Places";

const Nav = () => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#"><i className="fas fa-handshake"></i></a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/">Home <span className="sr-only">(current)</span></Link></li>
          <li><Link to="/">About Us?</Link></li>
          <li><Link to="/">Add New Entry</Link></li>
          <li><Link to="/my-places">My Places</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/login">Login or Contact Us</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
