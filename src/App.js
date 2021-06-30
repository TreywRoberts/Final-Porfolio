import React from 'react';
import './App.css';
import Home from './componets/Home'
import Projects from './componets/Projects'
import About from './componets/About'
import Contact from './componets/Contact'
import Navbar from './Navbar'
import SocialFollow from './componets/Footer';

function App() {
    return(
        <div className= 'App'>
            {/* <nav className='headerNav'>
                <Link className='navLinks' to='/'>Home</Link>
                <Link className='navLinks' to='/Projects'>Projects</Link>
                <Link className='navLinks' to='/About'>About</Link>   
            </nav> */}
            <Home />
            <Navbar />
            <About/>
            <Projects/>
            <Contact/>
            <SocialFollow />
            {/* <Skills/> */}
            {/* <Switch>
                <Route path = '/Projects' component={Projects}/>
                <Route path = '/About' component={About}/>
                <Route path = '/' component={Home}/>

            </Switch> */}
        </div>
    )
  
}

export default App;
