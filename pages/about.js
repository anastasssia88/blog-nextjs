import styled from 'styled-components'
import React, { useState } from 'react'

// Components
import Footer from '../Components/Footer'
import { Section, Main } from "../Components/shared/Wrappers"
import Navbar from "../Components/Navbar"
import SocialBtns from '../Components/shared/SocialBtns'
import Card from '../Components/about/Card'
import Form from '../Components/about/Form'
import Wave from '../Components/shared/Wave'

// Images
import globe from '../public/images/globe.svg'
  
const about = () => {
    const [ experience, setExperience ] = useState([
        {
            id: 5673647,
            title: "Computational linguist",
            date: "Aug 2021 - present",
            content: "My job is about making Russian-speaking voice assistant's pronunciation more natural for the ear of native speakers.",
            tags: ["Linguistics", "Machine Learning", "Python", "JavaScript", "Git" ],
            status: "current",

        },
        {
            id: 4343223,
            title: "Web Developer",
            date: "Nov 2018 - Aug 2021",
            content: "Achieved 90-100 performance and accessibility for clients' websites built with HTML5, CSS3, JavaScript; Reduced by 20% cost-per-lead by investigating and improving the performance of a construction company website by eliminating render blocking CSS and JavaScript; Increased the loading speed of a website from 4.3s to 0.9s by eliminating render-blocking elements which resulted in generating more than 100 new leads",
            tags: ["HTML", "CSS", "JavaScript", "Python", "React.js",  "Django"],
            status: "past"
        },
    ]);

    const [ projects, setProjects ] = useState([
        {
            id: 343,
            title: "Handbook Dev",
            content: "An open-source project. Web application for developers to share and search for resources.",
            tags: ["React.js", "Node.js"],
            link: "https://handbook.dev/",
            image: "",
        },
        {
            id: 344,
            title: "PetsPaw App",
            content: "An individual project. Dog breeds explorer application for everyone who loves dogs.",
            tags: ["React.js", "Dog API"],
            link: "https://petspaw-by-anastasia-titova.netlify.app/",
            image: "",
        },
        {
            id: 345,
            title: "JobBoard App",
            content: "An individual project. Job listing application for everyone looking for a new role",
            tags: ["React.js", "Tailwind CSS"],
            link: "https://job-listing-app-by-anastasia.netlify.app/",
            image: "",
        },
    ]);
    
    return (
        <>
            {/* <Section light bgRedCurve> */}
            <Section light >
                <Main>
                    <Navbar />
                    <Hero>
                        <h2>Summary</h2>
                        <p>My name is Anastasia, Nastya for short. I help to build a voice assistant technology. My background is in linguistics. I've got a bachelor's in linguitics. But after graduation became a self-tought frontend developer.</p>
                        <p>I'm native in Russian and fluent in English and French. My hobbies are computer science, phylosophy, hikes and home workouts.</p>
                    </Hero>
                    <SocialBtns primary bluehover alignLeft />

                    <Experience>
                        <h2>Work experience</h2>
                        <div>
                            {
                                experience.map( item => 
                                    <Card 
                                        key = {item.id}
                                        type="work"
                                        data={item}
                                    />    
                                )
                            }
                        </div>
                        
                    </Experience>
                    <Projects>
                        <h2>Some of my web dev projects</h2>
                        <div>
                        {
                            projects.map( item =>
                                <Card 
                                    key = {item.id}
                                    type="project"
                                    data={item}
                                /> 
                            )    
                        } 
                        </div>
                    </Projects>

                </Main>
                <Wave light />
            </Section>
            
            <FormContainer>
                <Main>
                    <Flexbox>
                        <Form title="Need to get in touch?" />
                        <img src={globe} alt="Girsl with a laptop" />
                    </Flexbox>
                </Main>
            </FormContainer>
            <Footer />
            
        </>
    );
}

export default about;


const Hero = styled.section`
    h2 {
    margin-top: 3rem;
    }

    p {
    margin: 1.5rem 0rem;
}
`

const Container = styled.section`
    width: 100%;
    margin: 3rem 0rem;
`

const Experience = styled(Container)`
    h2 {
            margin-top: 3rem;
            text-align: left;
        }
    > div {
        border-left: 6px solid #5CC0D9;
        margin-top: 3rem;
        padding: 0rem 3rem;

        /* @media (max-width: 768px) {
            padding: 0rem 3rem;
        } */
    }
`


const Projects = styled(Container)`
    > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-gap: 18px;

        @media (max-width: 768px) {
            grid-gap: 8px;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
        }
    }
`

const FormContainer = styled.section`
    background: #57B2D2;
    padding-bottom: 3rem;

    h2 {
        width: 100%;
        color: #EDEBE8;
    }
`

const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    img {
        /* width: 90%; */
        margin-left: 2rem;
        max-width: 30rem;
        justify-self: flex-end;

        /* @media (max-width: 768px) {
            margin-left: 0rem;
            margin-top: 2rem;
            max-width: 20rem;
        } */

        @media (max-width: 768px) {
            display: none;
        }
    }
`
