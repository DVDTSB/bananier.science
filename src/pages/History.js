import { Link } from "react-router-dom";
function History() {
  return (
    <>
    <div>
      <tr class="navbar"> 
        <td class="element"><Link to="/"><h2 class="hoverable">main</h2></Link></td>
				<td class="element"><h2 class="colored">history</h2></td>
				<td class="element"><Link to="/sites"><h2 class="hoverable">other sites</h2></Link></td>
        <td class="element"><Link to="/aboutus"><h2 class="hoverable">about us</h2></Link></td>
    	</tr>
    </div>
    <div class="content">
      <h1>LE HISTORI DE BANANIER</h1>
      <p1>bananier is banana banana banier boo nanier</p1>
    </div>
    </>
  );
}

export default History;