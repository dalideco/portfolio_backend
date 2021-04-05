import React from 'react'
import myCV from '../images/myCV.pdf'

function About() {
    return (
        <div className ="aboutme">
            <p>
                Enthusiastic Software engineering student eager to contribute to 
                team success through diligence, attention to the slightest details and 
                above average organizational skills. Clear understanding of modern 
                technologies and frameworks. Motivated to learn, prosper and excel 
                in the computer science industry.
            </p>
            <h3>
                Studied at :
            </h3>
            <ul>
                <li>Lycee Ennasr 2</li>
                <li>Software engineering at National institute of applied science and technology INSAT</li>
            </ul>
            <a href={myCV} download>Download CV!</a>
        </div>
    )
}

export default About
