import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() { 
        return ( 
            <div>         
            <nav>
              <label htmlFor="id-show-menu" className="show-menu">
                <div className="nav-icon">
                  <i className="fas fa-bars"></i>
                </div>
              </label>
              <input type="checkbox" id="id-show-menu" className="checkbox-menu" role="button"/>
              <div className="menu-block">
                <ul className="navUL">
                  <li><a href="/">Inicio</a></li>
                  <li><a href="/paises">Paises</a></li>
                  <li><a href="/musicos">Musicos</a></li>
                  <li><a href="/add">Agregarme</a></li>
                </ul>
              </div>
            </nav>
            </div>
         );

    }
}
 
export default Header;
