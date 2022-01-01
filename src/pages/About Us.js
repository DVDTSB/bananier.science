import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function AboutUs() {
  return (
    <>
    <Navbar page="aboutus"/>
    <div class="content">
    <h1>We migth have a sligth obsession</h1>
    <h2>WELCOME TO BANANIER.SCIENCE</h2>
    <h3>Description</h3>
    <p>
      This is a personal project for me to learn react.js and to make a website.
      It is not a commercial website, but it is a way for me and others to share our projects and ideas.
    </p>
    <h3>Who are we?</h3>
    <p>
      DVDTSB (Tache David) is the creator of this website, he can make computer go beep boop.<br/>
      Helpers:<br/>
       Ana, Clara, Ema, Iris, Luca, Mihnea, Noah, Radu, Rares
    </p>
    </div>
    </>
  );
}

export default AboutUs;