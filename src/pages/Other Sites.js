import { Link } from "react-router-dom";
import Element from "../components/Element";
function Sites() {
  return (
    <>
    <div>
      <tr class="navbar"> 
        <td class="element"><Link to="/"><h2 class="hoverable">main</h2></Link></td>
				<td class="element"><Link to="/history"><h2 class="hoverable">history</h2></Link></td>
				<td class="element"><h2 class="colored">othersites</h2></td>
        <td class="element"><Link to="/aboutus"><h2 class="hoverable">aboutus</h2></Link></td>
    	</tr>
    </div>
    <div class="content">
      <h1>Here are some sites that are banana/bananier related</h1>
      <h2>ENTER ALL OF THEM NOW MORTAL</h2>
    <Element title="Wikipedia" url="https://en.wikipedia.org/wiki/Musa_(genus)" source="https://www.pepiniere-paysage-provence.com/global/upload/produit/native/938_e3ab.jpg" alt="image of a banana tree" text="text"/>
    <Element title="lorem ipsum" url="https://example.com" source="https://packetpushers.net/wp-content/uploads/2019/11/Screenshot-example.com_.png" alt="son ador" text="a"/>
    </div>
    </>
  );
}

export default Sites;