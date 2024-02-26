import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sellEasy from "../../Assets/Projects/sellEasy.png";
import muqa from "../../Assets/Projects/muqa.png";
import angelsinn from "../../Assets/Projects/Angelsinn.png";
import remote_app from "../../Assets/Projects/remote_app.jpg";
import dealershipAPI from "../../Assets/Projects/dealershipAPI.png";
import automateInsta from "../../Assets/Projects/automateInsta.gif";
import godrejite from "../../Assets/Projects/godrejite.png";
import heyoo from "../../Assets/Projects/heyoo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heyoo}
              isBlog={false}
              title="Heyoo! Community Discovery App"
              description="Heyoo! is a community-based mobile application that offers local, global, and nation-based segregation of communities and posts. Users can engage in chat within various communities or create their own chatrooms. I implemented a robust deeplinking system in Flutter. Additionally, I created a scalable architecture in the frontend by utilizing Flutter Hive to store chat data locally, thereby enhancing the chatting process in terms of intuitiveness and speed. In the backend, I employed Socket.io server, Redis, and Kafka to implement scalable chatting for multiple users simultaneously. An efficient rewards system was also implemented."
              demoLink="https://play.google.com/store/apps/details?id=com.heyoo.app.heyoo_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muqa}
              isBlog={false}
              title="MuQA: Mumbai University Q&Ans"
              description="MuQA is a mobile application that provides Mumbai University question papers and solutions. I created and deployed an easy-to-use application. Flutter was used to develop the client-side application, while Google AdMob was utilized to display advertisements to the user. Node.js, DynamoDB, and AWS EC2 were employed for the server-side. Additional features include secure connections using SSL certificates. I also focused on database design and API implementation for storing a large amount of question and answer data. Additionally, OpenAI's GPT API was utilized to generate accurate answers for some questions."
              demoLink="https://play.google.com/store/apps/details?id=com.solves.muqa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={godrejite}
              isBlog={false}
              title="Godrejite 2.0"
              description="Godrejite is an accumulation of all corporate as well as business specific mobile application available for use by employees of Godrej Industries Limited and Associated Companies. I primarily contributed to creating home screen widgets on both Android and iOS, and deeplinks within the application were created to achieve the desired functionality, utilizing Flutter as a tool for mobile application development. Additionally, I implemented scheduling to check for new notifications on the client side."
              demoLink="https://play.google.com/store/apps/details?id=biz.apps.godrejcp.godrejite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dealershipAPI}
              isBlog={false}
              title="Dealership API"
              description="Dealership API uses JWT for user and dealership authentication. The project is made to automate the process of a dealership for selling cars and creating multiple deals on various cars. The user will select a deal and purchase the car. The user can also see various cars available and various dealerships selling different cars."
              ghLink="https://github.com/prizzv/Dealership-API"
              demoLink="https://dealership-api.onrender.com/"
              documentationLink="https://documenter.getpostman.com/view/21718964/2s93zH1Jtc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sellEasy}
              isBlog={false}
              title="Sell Easy"
              description="An auction-based e-commerce website where users can buy products on auction and sellers can post the products for auction. Users active session is tracked using cookies. Products are differentiated by live, upcomming and previous products on auction. These states are maintained dynamically."
              ghLink="https://github.com/prizzv/Sell-Easy"
              demoLink="https://sell-easy-6csn.onrender.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={angelsinn}
              isBlog={false}
              title="Angels Inn Website"
              description="This is a dynamic website tailored to meet the needs of a local business, crafted using fundamental web technologies including HTML, CSS, JavaScript, and PHP. With a blend of aesthetic design and functional elements, the website serves as an effective platform for the business to connect with. Utilizing PHP's capabilities, the website seamlessly integrates a contact form feature, streamlining communication between visitors and the business."
              demoLink="https://angelsinn.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={automateInsta}
              isBlog={false}
              title="Automate Instagram Message"
              description="The Automate Instagram Message project streamlines the process of sending messages on Instagram through Python and Selenium automation. Utilizing Python's powerful scripting capabilities, coupled with Selenium's web automation functionalities, the project enables users to effortlessly dispatch messages to specified recipients. Enhanced with a user-friendly Graphical User Interface (GUI) developed using Tkinter, the project offers intuitive interaction for users."
              ghLink="https://github.com/prizzv/Automate-instagram-msg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={remote_app}
              isBlog={false}
              title="Andoid Remote App"
              description="An Andorid Application which can control Smart Tvs through an inbuilt IR blaster or WIFI. Built using Android Studio and Java"
              ghLink="https://github.com/prizzv/Remote_Android_app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
