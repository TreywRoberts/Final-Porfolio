import React from 'react'
import { motion } from 'framer-motion'

import './Projects.css'
import fpshot from './../pictures/Family.PNG'
import csshot from './../pictures/Cloud.PNG'

function Projects(){
    return(
        <div id='projects' className='projects'>
            <motion.h2 whileHover={{scale:1.5}}>Projects</motion.h2 >
            <div className='pro-wrapper'>
            <div className='proInfo'>
                <img src={fpshot} alt='Screen shot of family promises' />
                <div className='img-overlay img-overlay--blur'>
                    <h3>Full Stack Web Developer</h3>
                    <p>React | Redux | Axios | Ant D | Sass | Okta |</p>
                    <p>This app is designed to track the services of the no profit Family Promises</p>
                    <p>Check it out on github</p>
                    <a href='https://github.com/TreywRoberts/family-promise-service-tracker-fe-b'>Frontend Repo</a>
                </div>
            </div>
            <div className='proInfo'>
                <img src={csshot} alt='screen shot if cloud schools' />
                <div className='img-overlay img-overlay--blur'>
                    <h3>Front End Developer</h3>
                    <p>HTML | React | Node | CSS </p>
                    <p>An app designed to link up students and volunteers for online schooling</p>
                    <p>Check it out on github</p>
                    <a href='https://github.com/Cloud-Schoolz/frontend'>Frontend Repo</a>
                </div>
            </div>
            <div className='proInfo'>
                <img src={csshot} alt='screen shot if cloud schools' />
                <div className='img-overlay img-overlay--blur'>
                    <h3>Front End Developer</h3>
                    <p>HTML | React | Node | CSS </p>
                    <p>An app designed to link up students and volunteers for online schooling</p>
                    <p>Check it out on github</p>
                    <a href='https://github.com/Cloud-Schoolz/frontend'>Frontend Repo</a>
                </div>
            </div>
            <div className='proInfo'>
                <img src={csshot} alt='screen shot if cloud schools' />
                <div className='img-overlay img-overlay--blur'>
                    <h3>Front End Developer</h3>
                    <p>HTML | React | Node | CSS </p>
                    <p>An app designed to link up students and volunteers for online schooling</p>
                    <p>Check it out on github</p>
                    <a href='https://github.com/Cloud-Schoolz/frontend'>Frontend Repo</a>
                </div>
            </div>
            <div className='proInfo'>
                <img src={csshot} alt='screen shot if cloud schools' />
                <div className='img-overlay img-overlay--blur'>
                    <h3>Front End Developer</h3>
                    <p>HTML | React | Node | CSS </p>
                    <p>An app designed to link up students and volunteers for online schooling</p>
                    <p>Check it out on github</p>
                    <a href='https://github.com/Cloud-Schoolz/frontend'>Frontend Repo</a>
                </div>
            </div>
            </div>
            <div className='gitButton'>
                <h3> Check out more here! </h3>
                <motion.a whileHover={{scale:1.2}} href='https://github.com/TreywRoberts'>github</motion.a>
            </div>

        </div>
    )
}

export default Projects;