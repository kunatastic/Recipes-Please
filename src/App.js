import React, { useState } from "react";
import Nav from "./Components/Nav";
import Items from "./Components/Items";
import Cooking from "./Components/Cooking";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <div className="App">
        <Nav setSearch={setSearch} />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route
            path="/:id"
            exact
            render={(props) => <Items search={search} />}
          />
        </Switch>
        <Route path={`/${search}/:id`} exact component={Cooking} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
