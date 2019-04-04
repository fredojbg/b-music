import React, { Component } from "react";
import Data from "../../db/db.json";
import "./User.css";
import user_img from "../../img/user_img.png";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      datas: {
        nombre: "",
        apellido: "",
        img: "",
        phone: "",
        pais: "",
        inst: ""
        
      },
      data: Data
    };
  }
  //Funcion del Buscador
  handleChange = event => {
    this.setState({ filter: event.target.value });
  };
  //Funcion del Form
  handleAddForm = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      datas: {
        [name]: value
      }
    });
  };
  handleAddUsers = e => {
    this.setState({
      data: [
        ...this.state.data,
        {
          nombre: this.state.datas.nombre,
          apellido: this.state.datas.apellido,
          phone: this.state.datas.phone,
          pais: this.state.datas.pais,
          inst: this.state.datas.inst,
          id: this.state.datas.id
        }
      ]
    });
  };
  render() {
    //Definicion de Const para el buscador
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (
      //Html del Buscador
      <div>
        <div className="form">
          <input type="text" name="nombre" onChange={this.handleAddForm} value={this.state.nombre}/>
          <input type="text" name="apellido" onChange={this.handleAddForm} value={this.state.apellido}/>
          <input type="text" name="phone" onChange={this.handleAddForm} value={this.state.phone} />
          <input type="text" name="pais" onChange={this.handleAddForm} value={this.state.pais}/>
          <input type="text" name="inst" onChange={this.handleAddForm} value={this.state.inst} />
          <button onClick={this.handleAddUsers} className="btn blue">
            Agregar
          </button>
        </div>
        <div className="buscador">
          <input
            type="search"
            className="bar-buscador"
            placeholder="Busca por (Pais o Instrumento)"
            name="search"
            value={filter}
            onChange={this.handleChange}
          />
          <button className="btn blue">Buscar</button>
        </div>
        {/* Html + Map de Users con Buscador para los usuarios */}
        {filteredData.map((usersDetail, index) => {
          return (
            <div key={usersDetail.id}>
              <article>
                <div className="img">
                  <img className="user_img" src={user_img} alt="" />
                  <h1>
                    {usersDetail.nombre} {usersDetail.apellido}{" "}
                  </h1>
                  <span>
                    <strong>{usersDetail.inst}</strong> {usersDetail.pais}
                  </span>
                </div>
                <div className="btn-con">
                  <button className="btn blue" type="#">
                    Mas informacion
                  </button>
                  <button className="btn" type="#">
                    Llamar
                  </button>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
