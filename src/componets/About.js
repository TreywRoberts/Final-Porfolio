import React from 'react'
import './About.css'
import { motion } from "framer-motion"

function About(){
    return(
        <motion.div 
        id='about'
        className='about'>
            <div className='aboutHeader'>
                <motion.h2
                whileHover={{scale: 1.5}}
                >About Me</motion.h2>
                {/* <img className='aboutPic' src={athensPic}/> */}
                <div className='aboutEmpty'></div>
                <h3>I have been a Athens, GA native since 2000.<br>
                </br>After working in resturants and sales I decided<br>
                </br>to turn my focus on the digital world. I specialize in<br>
                </br> react, python, html5, and css<br>
                </br>I am looking forward to working with or chatting with you! </h3>
            </div>
            <motion.div
            
            className='skills'>
                <motion.h2
                whileHover={{scale: 1.5}}
                >Skills</motion.h2>
                <div className='skillsContianer'>
                    <div className='frontend'>
                        <h3>Frontend</h3>
                        <h4>Python</h4>
                        <h4>React/Redux</h4>
                        <h4>html5</h4>
                        <h4>CSS</h4>
                        <h4>JavaScript</h4>
                    </div>
                    <div className='backend'>
                        <h3>Backend</h3>
                        <h4>Node.js</h4>
                        <h4>PostgreSQL</h4>
                    </div>
                    <div className='other'>
                        <h3>Others</h3>
                        <h4>Git</h4>
                        <h4>Heroku</h4>
                        <h4>Jest</h4>
                        <h4>SuperTest</h4>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    )
}

export default About;