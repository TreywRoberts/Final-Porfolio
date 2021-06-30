import React from 'react'
   
   class Navbar extends React.Component{
       
       render(){
           
           return(
                <nav className='headerNav'>
                        <a href='#home' className='navLinks'>Home</a>
                        <a href='#about' className='navLinks'>About</a>
                        <a href='#projects' className='navLinks' >Projects</a>
                        <a href='#contact' className='navLinks'>Contact</a>
                        <a href='https://treywroberts.medium.com/' className='navLinks'>Blog</a>  
                    </nav>
           )
       }
   }
export default Navbar