import React from 'react'
import me from './../pictures/me.jpg'
import './Home.css'
import logo from './../pictures/TreyLogo.png'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'


function Home(){
    return(
        <div id='home' className='home'>
            <div className='logo'>
                <motion.img
                whileHover={{rotate: [0, 40, -40, 40, -40, 40, -40, 0]}}

                animate={{
                    scale: [8, 1],
                    y: [600, 0],
                    duration: 10.50,
                }} 
                src={logo} />
            </div>
            <div className = 'homeHeader'>
                <img className='me' src={me} alt='me'/>  
                <h2>Hello, my name is Trey and I
                <Typewriter
                options={{
                    strings:['am a full stack developer!', 'am a UX/UI designer!', 'hope you have a great day!'],
                    autoStart: true,
                    loop: true,
                }}
                 />
                 </h2>
            </div>
            <div className='Buttons'>
                {/* <h3>Checkout my recent projects!</h3>
                <a href='#projects'>Here!</a>
                <h3>Learn more about me!</h3>
                <a href='#about'>Here!</a> */}
            </div>
        </div>
    )
}

export default Home;