import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "black",

        color: "white",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        height: "100px",

        overflow: "hidden",

        boxSizing: "content-box",

        flexdirection: "column",

        paddingtop: "10px",
      }}
    >
      <h1>Trackfinder</h1>
      <ul
        style={{
          listStyleType: "none",
          margin: 10,
          padding: 120,
        }}
      >
        <li
          style={{
            listStyleType: "none",

            display: "inline",
            fontSize: "18px",
            padding: "30px",
            color: "white",
          }}
        >
          <Link to="/">Home</Link>
        </li>

        <li
          style={{
            listStyleType: "none",

            display: "inline",
            fontSize: "18px",
            padding: "30px",
          }}
        >
          <Link to="/add">Add</Link>
        </li>
        <li
          style={{
            listStyleType: "none",

            display: "inline",
            fontSize: "17px",
            padding: "10px",
          }}
        >
          <Link to="/recomm">Recommendation</Link>
        </li>
        <form className="example" action="/action_page.php">
          <input
            style={{
              listStyleType: "none",

              // display: "flex",
              fontSize: "14px",
              padding: "10px",
            }}
            type="text"
            placeholder="Search.."
            name="search"
          ></input>
          <button
            type="submit"
            style={{
              listStyleType: "none",

              // display: "inline",
              fontSize: "10px",
              padding: "12px",
              margin: "12px",
            }}
          >
            <i className="fa fa-search">GO</i>
          </button>
        </form>
      </ul>
    </nav>
  );
}

export default Navbar;
