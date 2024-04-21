import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={bitsOfCode}
              isBlog={false}
              title="Crypto Tracker"
              description=" Created an interactive, animated website for buyers and sellers that shows the current price of coins (INR, USD) 
              Recorded the past 1-year performance on the market using React and Coin Gecko APIs."
              ghLink="https://github.com/ShankyDV/Crypto-Tracker"
              demoLink="https://crypto-trackerwebapp.netlify.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Microsoft Team Clone"
              description="Implemented Microsoft Teams connecting multiple users using peer-to-peer connection with a latency of sub 500ms.
              • Planned Firebase authentication, enabling seamless login using a Microsoft account, resulting in a 30% operated user
              involvement."
              ghLink="https://github.com/ShankyDV/Microsoft-Team-Clone"
              demoLink="https://github.com/ShankyDV/Microsoft-Team-Clone"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Travel Advisor"
              description="Developed a Travel Companion website with Google Maps, TravelAdvisor APIs, increasing user participation by 50%
              Featured data fetching based on location and data filtering."
              ghLink="https://github.com/ShankyDV/Travel-Advisor"
              demoLink="https://travel-advisorwebapp.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
