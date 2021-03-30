import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Items from "./components/Items";

function App() {
  return (
    <Router>
      <div>
        <div className="navBar">
          <header>
            <h1>My Life</h1>
          </header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Items />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
