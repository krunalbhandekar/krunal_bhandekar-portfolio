import React from 'react'
import { Container, Row, Col, Badge, Button } from "react-bootstrap";


const About = () => {
  return (
    <>
    <h1 style={{textAlign:"center", marginTop:"50px",color:"#091292",fontWeight:"bolder"}}>About me</h1>
    <p style={{textAlign:"center",margin:"-10px 0 50px 0",color:"#516897"}}>-who i am-</p>

    <Container className="mt-5">
            <Row className="my-5 px-md-5" xs={1} md={2}>
              <Col>
                <a href="https://www.instagram.com/krunal_bhandekar/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="img-fluid proj-image shadow"
                    src="images/krunal.jpg"
                    alt="Krunal Bhandekar"
                  />
                </a>
              </Col>
              <Col className="pt-2">
                <h3 className="font-weight-bold color-customBlue mb-0">
                  I am Krunal Bhandekar
                </h3>
                <br />
                
                  <>
                    <span>Passionate Skilled, collaborative, and attentive Full Stack Web Developer with a specialization in MERN stack. I am a learner and explorer constantly seeking better quality, efficiency, and a healthy environment and   I enjoy problem-solving and learning from the challenges that come along. Thus, the challenges bring the best out of me.  </span>
                    <br />
                    <br />
                    
                    <span> I am looking for an environment that will allow me to implement the best of my knowledge.</span>

                  </>
                 <br />

                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  className="projectBtn"
                >
                  {" "}
                  DOWNLOAD CV
                </Button>

              </Col>
            </Row>
      </Container>
    </>
  )
}

export default About