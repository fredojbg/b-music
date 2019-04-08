import React, { Component } from "react";
import "./Main.css";

class MainContent extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <section className="home">
          <div className="text">
            <h1>Bienvenidos a B-Music</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              ut fugiat doloremque, placeat quis possimus.
            </p>
            <button className="btn-main">Buscar musicos</button>
          </div>
        </section>

        <section className="about">
          <div className="text">
            <h1>La mejor forma de encontrar un musico en tu localidad</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              ut fugiat doloremque,placeat quis possimus.
            </p>
            <button className="btn-main">Buscar por pais</button>
          </div>
        </section>
      </div>
    );
  }
}

export default MainContent;
