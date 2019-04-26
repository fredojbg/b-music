import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import user_img from "../img/AD3.png";


const Header = props => (
  <nav>
    <label htmlFor="id-show-menu" className="show-menu">
      <div className="nav-icon">
        <i className="fas fa-bars" />
      </div>
    </label>

    <input
      type="checkbox"
      id="id-show-menu"
      className="checkbox-menu"
      role="button"
    />

    <div className="menu-block">
      <div className="img">
        <img className="logo" src={user_img} alt=""/>
      </div>
      <ul className="navUL">
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/paises">Paises</Link>
        </li>

        <li>
          <Link to="/musicos">Musicos</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
