import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Data from "../../db/db.json";
import "./User.css";
import user_img from "../../img/user_img.png";

class Users extends Component {
  state = {
    filter: "",
    data: Data,
    datas: {
      nombre: "",
      apellido: "",
      img: "",
      phone: "",
      pais: "",
      inst: ""
    }
  };

  //Funcion del Buscador
  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  //Funcion del Form
  handleAddForm = ({ target }) => {
    this.setState({
      datas: {
        ...this.state.datas,
        [target.name]: target.value
      }
    });
  };

  // handleClose = e => {
  //   this.props.history.push('/paises')
  // }
  //Usuario Guardado con Exito
  handleAddUsers = e => {
    this.props.history.push('/good');
    this.setState({
      data: [
        ...this.state.data,
        {
          ...this.state.datas
        }
      ]
    });
  };
  render() {
    //Definicion de Const para el buscador
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item =>
      Object.values(item).some(value =>
        value.toLowerCase().includes(lowercasedFilter)
      )
    );

    return (
      //Venta modal Add Users
      <div className="users-container">
        <div className="modal" id="agregarme">
          <div className="form">
            <h1>Ingresa tus datos</h1>
            <input
              type="text"
              name="nombre"
              onChange={this.handleAddForm}
              placeholder="Nombre"
            />

            <input
              type="text"
              name="apellido"
              onChange={this.handleAddForm}
              placeholder="Apellido"
            />

            <input
              type="text"
              name="phone"
              onChange={this.handleAddForm}
              placeholder="Numero de Telefono"
            />

            <input
              type="text"
              name="pais"
              onChange={this.handleAddForm}
              placeholder="Tu Pais"
            />

            <input
              type="text"
              name="inst"
              onChange={this.handleAddForm}
              placeholder="Que instrumento tocas"
            />

            <button onClick={this.handleAddUsers} className="btn btn-form">
              Agregar
            </button>
            {/* <button onClick={this.handleClose} className="btn blue btn-close">
              Cerrar
            </button> */}
          </div>
        </div>
        <div className="buscador">
          <h1>¡Busca un musico!</h1>
          <input
            type="search"
            className="bar-buscador"
            placeholder="Busca por (Pais o Instrumento)"
            name="search"
            value={filter}
            onChange={this.handleChange}
          />

          <a href="#agregarme" className="btn btn-add">
            Agregarme
          </a>
        </div>

        {/* Html + Map de Users con Buscador para los usuarios */}
        <div className="users-articles">
          <ReactCSSTransitionGroup
            className="no-wrap"
            transitionName="fade"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}
          >
            {filteredData.map(usersDetail => (
              <article key={usersDetail.id}>
                <div className="img">
                  <img className="user_img" src={user_img} alt="" />
                </div>

                <div className="user-text">
                  <h1>
                    {usersDetail.nombre} {usersDetail.apellido}{" "}
                  </h1>

                  <span>
                    <strong>{usersDetail.inst}</strong> {usersDetail.pais}
                  </span>
                </div>

                <div className="btn-con">
                  <button className="btn" type="#">
                    Llamar
                  </button>
                  <button className="btn blue" type="#">
                    Mas informacion
                  </button>
                </div>
              </article>
            ))}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default withRouter(Users);
