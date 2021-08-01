import { Link } from "react-router-dom";
function Main() {
  return (
    <>
    <div>
      <tr class="navbar"> 
        <td class="element"><h2 class="colored">main</h2></td>
        <td class="element"><Link to="/history"><h2 class="hoverable">history</h2></Link></td>
				<td class="element"><Link to="/why"><h2 class="hoverable">why</h2></Link></td>
        <td class="element"><Link to="/uwu"><h2 class="hoverable">uwu</h2></Link></td>
    	</tr>
    </div>
    <div class="bananier">
      <button onClick={()=>{
        window.open("https://ro.wikipedia.org/wiki/Bananier", "_blank")
      }}>
        <h1 class="hoverable"><i>bananier</i></h1>
      </button>
    </div>
    </>
  );
}

export default Main;