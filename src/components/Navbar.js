import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <tr class="navbar"> 
        <td class="element"><Link to="/"><h2 class="hoverable">main</h2></Link></td>
				<td class="element"><Link to="/history"><h2 class="hoverable">history</h2></Link></td>
				<td class="element"><Link to="/why"><h2 class="hoverable">why</h2></Link></td>
				<td class="element"><Link to="/uwu"><h2 class="hoverable">uwu</h2></Link></td>
    	</tr>
    </div>
  );
}
export default Navbar;