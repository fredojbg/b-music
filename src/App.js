import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import GoodAddUsers from "./components/Goods/GoodAddUsers";
import MainContent from "./components/Main/MainContent";
// import FormAdd from "./components/Main/UsersDetails/FormAdd/FormAdd";
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
            render={() => (
              <>
                <Header />
                <MainContent />
              </>
            )}
          />

          <Route
            path="/paises"
            strict
            component={Header}
          />

          <Route
            path="/musicos"
            strict
            render={() => (
              <>
                <Header />
                <Users />
                <Footer />
              </>
            )}
          />
          <Route
            path="/good"
            strict
            component={GoodAddUsers}
          />

          {/* <Route
            path="/add"
            strict
            render={() => (
              <>
                <Header />
                <FormAdd />
              </>
            )}
          /> */}
        </Router>
      </div>
    );
  }
}
export default App;