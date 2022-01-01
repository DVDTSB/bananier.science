import { Link } from "react-router-dom";
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
      <Element title="Py-text" url="https://github.com/DVDTSB/py-text" text="A simple and intuitive python engine for making text adventure games, currently in pre-alpha."/>
    </div>
    </>
  );
}

export default Projects;