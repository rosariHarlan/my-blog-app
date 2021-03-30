import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <div className="navBar">
        <header>
          <h1>My Life</h1>
        </header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <Home />
    </div>
  );
}

export default App;
