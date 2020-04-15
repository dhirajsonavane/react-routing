import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Container from "@material-ui/core/Container";

import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Users from "./components/Users";

class App extends React.Component {
  render() {
    return (
      <main>
        <NavBar />
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Switch>
            <Route path="/react-routing" component={Home} exact />
            <Route path="/contact" component={Contact} />
            <Route path="/users" component={Users} />
          </Switch>
        </Container>
        <Footer />
      </main>
    );
  }
}
export default App;
