import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="top-menu">
      <h1 className="heading">My React Exercises</h1>
      <nav>
        <div className="link">
          <h2 className="content"><NavLink to="/lucky-number">Javascript Expressions in JSX & ES6 Template Literals </NavLink> {" "}
          </h2>
        </div>
        <div className="link">
          <h2 className="content"><NavLink to="/local-time">useState Hook Practice</NavLink> {" "}</h2>
        </div>
        <div className="link">
          <h2 className="content"><NavLink to="/greeting">React Styling Practice</NavLink> {" "}</h2>
        </div>
        <div className="link">
          <h2 className="content"><NavLink to="/mapping-data">Mapping Data to Components</NavLink> {" "}</h2>
        </div>
        <div className="link">
          <h2 className="content"><NavLink to="/emojipedia">Emojipedia</NavLink> {" "}</h2>
        </div>
        <div className="link">
          <h2 className="content"><NavLink to="/calculate">Calculator</NavLink> {" "}</h2>
        </div>
      </nav >
    </div >
  );
}

export default App;
