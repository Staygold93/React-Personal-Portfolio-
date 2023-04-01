import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Horoscope from "../../Assets/Projects/Horoscope.png";
import Mojave from "../../Assets/Projects/Mojave.png";
import Crypto from "../../Assets/Projects/Crypto.png"
import TextEditor from "../../Assets/Projects/TextEditor.png"
import weatherForecast from "../../Assets/Projects/weatherForecast.png"
import insomnia from "../../Assets/Projects/insomnia.png"


function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Projects </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few apps I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Mojave}
                            isBlog={false}
                            title="Mojave E-Commerce"
                            description="A Full-Stack E-commerce store prototype built with MERN stack, that enables customers to purchase products and utilizes third party API's."
                            ghLink="https://github.com/Staygold93/Mojave"
                            demoLink="https://mojave-store.herokuapp.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Horoscope}
                            isBlog={false}
                            title="Cosmos-Horoscope-App"
                            description="A simple node js app that allows the user to view their Horoscope data while using a mySQL database when a user is created upon login/signup page."
                            ghLink="https://github.com/Staygold93/Horoscope-App"
                            demoLink="https://horoscope-cosmos.herokuapp.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Crypto}
                            isBlog={false}
                            title="My Favorite Crpto"
                            description="An interactive web application that allows users to view and compare different cryptocurrencies."
                            ghLink="https://github.com/adinair007/My-Favorite_Crypto"
                            demoLink="https://adinair007.github.io/My-Favorite_Crypto/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={TextEditor}
                            isBlog={false}
                            title="PWA Text-Editor"
                            description="A text-editor-app created using front-end and back-end modularized using webpack plugins, next-gen JavaScript and also utilizing IndexDb, service worker and manifest.json files."
                            ghLink="https://github.com/Staygold93/PWA-TextEditor"
                            demoLink="https://text-editor-idb.herokuapp.com/"
                        />
                    </Col>
                    
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={weatherForecast}
                            isBlog={false}
                            title="Weather-Forecast"
                            description="A weather dashboard which displays the current forecast and a five-day foreccast for the user's selected city using a Server-side API ."
                            ghLink="https://github.com/Staygold93/Weather-forecast-challenge"
                            demoLink="https://staygold93.github.io/Weather-forecast-challenge/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={insomnia}
                            isBlog={false}
                            title="Social-Network-Api"
                            description="API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list using Node.js, Mongoose and Express."
                            ghLink="https://github.com/Staygold93/Social-Network-Api"
                            demoLink="https://drive.google.com/file/d/1jTtQ7f8n_q98ALp-cP7rb4tBcLwDMN5X/view"
                        />
                    </Col>

                    
                </Row>
            </Container>
        </Container>
    );
}

export default Projects; 