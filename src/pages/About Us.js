import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <>
    <div>
      <tr class="navbar"> 
        <td class="element"><Link to="/"><h2 class="hoverable">main</h2></Link></td>
				<td class="element"><Link to="/history"><h2 class="hoverable">history</h2></Link></td>
				<td class="element"><Link to="/sites"><h2 class="hoverable">other sites</h2></Link></td>
				<td class="element"><h2 class="colored">about us</h2></td>
    	</tr>
    </div>
    <div class="content">
    <h1>We migth have a sligth obsession</h1>
    <h2>WELCOME TO BANANIER.SCIENCE</h2>
    <p>
      This site is just an experiment for David to mess with React.js , JSX and CSS<br/>
      nerd shit emirait<br/>
      But also for us to mess around and host our nerd shit
    </p>
    <h2>MEET THE TEAM</h2>
    <p>
      in alphabetical order:<br/>
      ANA , a fellow bananier enjoyer and a good writer, one of the bananier priests<br/>
      CLARA , the assasin and evil force of this project , ussually can be found worshiping banans<br/>
      DAVID , the programmer guy and the creator of the bananier meme between us<br/>
      EMA , emoji garl 🤗, she sees the pozitive side of things and she likes banana green<br/>
      IRIS , ULTIMATE BANANA EATER, the stalker gall <br/>
      MICNUS , the sussy bananier man<br/>
      
    </p>
    </div>
    </>
  );
}

export default AboutUs;