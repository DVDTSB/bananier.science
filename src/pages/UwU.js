import { Link } from "react-router-dom";
function UwU() {
  return (
    <>
    <div>
      <tr class="navbar"> 
        <td class="element"><Link to="/"><h2 class="hoverable">main</h2></Link></td>
				<td class="element"><Link to="/history"><h2 class="hoverable">history</h2></Link></td>
				<td class="element"><Link to="/why"><h2 class="hoverable">why</h2></Link></td>
				<td class="element"><h2 class="colored">uwu</h2></td>
    	</tr>
    </div>
    <div class="content">
    <h1>Uwu</h1>
    </div>
    </>
  );
}

export default UwU;