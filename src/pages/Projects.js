
import Navbar from "../components/Navbar";
import Element from "../components/Element";
function Projects() {
  return (
    <>
    <Navbar page="projects"/>
    <div class="content">
      <h1>Here is a list of projects that are associated to bananier.science</h1>
      <h2>Personal projects</h2>
      <Element title="bananier.science" text="ofcourse" url="https://bananier.science"/>
      <Element title="terminal text engine" url="https://github.com/DVDTSB/terminal-text-engine" text="A simple and intuitive javascript engine for making text adventure games, currently in pre-alpha."/>
      More to come...
      <h2>Friend's projects</h2>
      <Element title="Xenaf, the Change" text="An entry for the NSA Space Settlement Contest, winner of the Artistic Award." url="xenaf"/>
    </div>
    </>
  );
}

export default Projects;