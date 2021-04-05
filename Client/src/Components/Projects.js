import React from 'react'
import Images from './Images'

function Projects() {
    return (
        <div>
            <Images/>
            <h3>
                Basic Skills
            </h3>
            <ul>
                <li>java</li>
                <li>C/C++</li>
            </ul>
            <h3>
                Web Skills
            </h3>
            <ul>
                <li>html/css/js</li>
                <li>Sass</li>
                <li>MySQL</li>
                <li>MERN(MongoDB/React js/Express js/Node js)</li>
                <li>Mongoose js</li>
            </ul>
            <h3>
                Basic Projects
            </h3>
            <ul>
                <li>
                    Rock paper scissors using vanilla js
                </li>
                <li>
                    Black Jack game using vanilla js
                </li>
                <li>
                    To do List using react js
                </li>
                <li>
                    Mern stack <a target="_blank" rel="noreferrer" href="https://dalideco.github.io/keeper-app/">keeper app</a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://obscure-escarpment-97886.herokuapp.com/">NewsLetter</a> with express and mailchimp api
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href ="https://shrouded-springs-21907.herokuapp.com/">To do list</a> with express and mongodb
                </li>
            </ul>
        </div>
    )
}

export default Projects
