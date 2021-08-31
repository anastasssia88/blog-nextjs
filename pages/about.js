import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import { Section, Main } from "../Components/shared/Wrappers"
import Navbar from "../Components/Navbar"
import SocialBtns from '../Components/shared/SocialBtns'
import WorkCard from '../Components/about/Card'
import ProjectCard from '../Components/about/ProjectCard'

 
  
const about = () => {

    const [ experience, setExperience ] = useState([
        {
            id: 5673647,
            title: "Computational linguist",
            date: "Aug 2021 - present",
            content: "My job is about making Russian-speaking voice assistant's pronunciation more natural for the ear of native speakers.",
            tags: ["Machine Learning", "Linguistics", "Python", "Git"],
            image: ""
        },
        {
            id: 4343223,
            title: "Web Developer",
            date: "Nov 2018 - present",
            content: "Achieved 90-100 performance and accessibility for clients' websites built with HTML5, CSS3, JavaScript; Reduced by 20% cost-per-lead by investigating and improving the performance of a construction company website by eliminating render blocking CSS and JavaScript; Increased the loading speed of a website from 4.3s to 0.9s by eliminating render-blocking elements which resulted in generating more than 100 new leads.",
            tags: ["CSS", "JavaScript", "React.js", "Python", "Django"],
            image: ""
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
                        <p>I’m a computational linguist with a bachelor's degree in linguistics and a self-taught web developer with 3 years of experience. I’m passionate about human languages and computers. I'm native in Russian and fluent in English ans French. Fortunately, my job allows me to combine both! At work, I help build the voice of a Russian-speaking voice assistant by applying my knowledge of linguistics, machine learning, and python.</p>
                    </Hero>
                    <SocialBtns primary bluehover alignLeft />

                    <Experience>
                        <h2>Work experience</h2>
                        <WorkCard 
                            type="work"
                            data={experience}
                            title="Computational linguist"
                            date="Aug 2021 - present"
                            content="My job is about making Russian-speaking voice assistant's pronunciation more natural for the ear of native speakers."
                            image=""
                        />
                        
                    </Experience>

                </Main>
            </Section>

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

const Experience = styled.section`
    width: 100%;
    
    h2 {
        margin: 3rem 0rem;
        text-align: left;
    }

`