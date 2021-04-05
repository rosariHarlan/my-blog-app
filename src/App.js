import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Items from "./components/Items";
import Details from "./components/Details";
import Contact from "./components/Contact";
import AddComment from "./components/AddComment";

function App() {
  return (
    <Router>
      <div>
        <div className="navBar">
          <header>
            <h1>
              <Link to="/">GirlWhoCodes</Link>
            </h1>
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
          <Route path="/blog/:id">
            <Details />
          </Route>
          <Route path="/blog">
            <Items />
          </Route>
          <Route path="/comment">
            <AddComment />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
