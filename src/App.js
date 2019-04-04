import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/Main/MainContent";
import FormAdd from "./components/Main/UsersDetails/FormAdd/FormAdd";
import Footer from "./components/Footer/Footer";
import Users from "./components/Main/UsersDetails/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route
            path="/"
            exact
            strict
            render={() => {
              return (
                <div>
                  <Header />
                  <MainContent />
                </div>
              );
            }}
          />

          <Route
            path="/paises"
            exact
            strict
            render={() => {
              return (
                <div>
                  <Header />
                </div>
              );
            }}
          />

          <Route
            path="/musicos"
            exact
            strict
            render={() => {
              return (
                <div>
                  <Header />
                  <Users />
                  <Footer />
                </div>
              );
            }}
          />

          <Route
            path="/add"
            exact
            strict
            render={() => {
              return (
                <div>
                  <Header />
                  <FormAdd />
                </div>
              );
            }}
          />
        </Router>
      </div>
    );
  }
}
export default App;
