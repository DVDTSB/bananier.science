import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <tr class="navbar">
      {props.page === "main" ? (

        <td class="element">
          <h2>main</h2>
        </td>
      ) : (
        <td class="element">
          <Link to="/">
            <h2 class="hoverable">main</h2>
          </Link>
        </td>
      )}
      {props.page === "history" ? (
        <td class="element">
          <h2>history</h2>
        </td>
      ) : (
        <td class="element">
          <Link to="/history">
            <h2 class="hoverable">history</h2>
          </Link>
        </td>
      )}
      {props.page === "projects" ? (
        <td class="element">
          <h2>spacek</h2>
        </td>
      ) : (
        <td class="element">
          <Link to="/projects">
            <h2 class="hoverable">projects</h2>
          </Link>
        </td>
      )}
      {props.page === "aboutus" ? (
        <td class="element">
          <h2>about us</h2>
        </td>
      ) : (
        <td class="element">
          <Link to="/aboutus">
            <h2 class="hoverable">about us</h2>
          </Link>
        </td>
      )}
    </tr>
  );
}
export default Navbar;
