import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img src="img/hero.png" alt="hero" />
      <h2>Welcome to my so-called life</h2>
      <div className="button">
        <Link to="/blog">Let's get to know each other!</Link>
      </div>
    </div>
  );
};

export default Home;
