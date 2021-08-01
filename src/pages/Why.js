import { Link } from "react-router-dom";
function Why() {
  return (
    <>
    <div>
      <tr class="navbar"> 
        <td class="element"><Link to="/"><h2 class="hoverable">main</h2></Link></td>
				<td class="element"><Link to="/history"><h2 class="hoverable">history</h2></Link></td>
				<td class="element"><h2 class="colored">why</h2></td>
        <td class="element"><Link to="/uwu"><h2 class="hoverable">uwu</h2></Link></td>
    	</tr>
    </div>
    <div class="content">
    <p1>why not</p1>
    </div>
    </>
  );
}

export default Why;