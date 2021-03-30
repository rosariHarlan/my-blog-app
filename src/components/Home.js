import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <Router>
      <div className="home">
        <img src="img/hero.png" alt="hero" />
        <h2>Welcome to my so-called life</h2>
        <button>
          <Link to="/blog">Let's get to know each other!</Link>
        </button>
      </div>
    </Router>
  );
};

export default Home;
