import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>My React Projects</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/lucky-number">Javascript Expressions in JSX & ES6 Template Literals</Link> |{" "}
        <Link to="/local-time">useState Hook Practice</Link> |{" "}
        <Link to="/greeting">React Styling Practice</Link> |{" "}

      </nav>
    </div>
  );
}

export default App;
