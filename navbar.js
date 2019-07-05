import React from "react";
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";

import { Index } from "./index";
import { PokemonList } from "./app/pokemon_list";
import { Test } from "./app/test";
import { MasterDetail } from "./app/master-detail";

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">pok</NavLink>
              </li>
              <li>
                <NavLink to="/test" activeClassName="active">test</NavLink>
              </li>
              <li>
                <NavLink to="/master-detail" activeClassName="active">Master-detail</NavLink>
              </li>
            </ul>
          </nav>
          

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={PokemonList} />
          <Route path="/test/" component={Test} />
          <Route path="/master-detail/" component={MasterDetail} />
        </div>
      </Router>
    );
  }
}


export default Navbar;