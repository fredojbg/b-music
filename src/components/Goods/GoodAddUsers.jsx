import { withRouter } from "react-router-dom";
import React from "react";
import "./GoodAddUsers.css";

const GoodAddUsers = props => {
    setTimeout(function(){ props.history.push('/musicos');}, 1000);
    return (
        <div>
          <h4>Usuario agregado con Exito</h4>
      </div>
    )
}

export default withRouter(GoodAddUsers);