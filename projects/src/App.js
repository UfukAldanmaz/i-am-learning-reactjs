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
        <Link to="/lucky-number">My Lucky Number</Link> |{" "}
        <Link to="/local-time">Local Time</Link> |{" "}
      </nav>
    </div>
  );
}

export default App;
