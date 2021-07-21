import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <tr class="navbar"> 
        <td class="element"><Link to="/"><h1 class="hoverable">main</h1></Link></td>
				<td class="element"><Link to="/history"><h1 class="hoverable">history</h1></Link></td>
				<td class="element"><Link to="/why"><h1 class="hoverable">why</h1></Link></td>
				<td class="element"><Link to="/uwu"><h1 class="hoverable">uwu</h1></Link></td>
    	</tr>
    </div>
  );
}
export default Navbar;