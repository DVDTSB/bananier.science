import { Helmet } from "react-helmet";
function Section(props) {
  return (
    <div className="section">
      <div className="title">{props.title}</div>
      <div className="image">
        <img src={props.img} alt="banana"/>
      </div>
      <div className="text">
        {props.children}
      </div>
    </div>
  );
}
function SpaceK() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="SpaceK.css" />
      </Helmet>
      <div className="title">
        <h1>SpaceK</h1>
        <h2>Shooting for the stars</h2>
      </div>
      <div className="content">
        <h3>Description and Mission</h3>
        <p>
          SpaceK is a project that aims to build a small rocket. We aim for
          higher and higher heights by refining our designs and making the price
          cheaper. We easier to pay for. We want to make sure that our rocket
          will be as safe as possible, so we will build it with a safety system
          that will prevent the rocket from crashing into the ground and the
          other rockets.
        </p>
      </div>
      <Section
        title="Who are we?"
        img="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
      >
        <h4>Meet the Team</h4>
        Radu Stoica, he is the one that came with the idea. He takes part in the
        design procces and social media managment
        <br />
        Noah Manea, he was the second to join this project, he works on the
        design of the rocket and motor, but also simulations
        <br />
        Luca Ortan, he does research on materials, and he is the one that will
        do the most building
        <br />
        Tache David, he works on the programming and robotics part, he takes
        part in the design process, and this website
        <br />
        Mihnea Popa, he is the one that straps everything together, by doing to
        do lists and organizing us.
        <br />
        Eric Rucareanu, he helps with the programming part and building
        <br />
        Carmen Tanasescu, she is our teacher and manager
        <br />
      </Section>
    </>
  );
}
export default SpaceK;
