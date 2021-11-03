import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import {motion} from 'framer-motion'
import './Contact.css'
import { init, sendForm } from 'emailjs-com';
init('user_Fkk7mNw3WDZjiR2XAyt0p');

function Contact(){
    const { register, handleSubmit, watch } = useForm();
    const [contactNumber, setContactNumber] = useState("000000");
    const [statusMessage, setStatusMessage] = useState("Message");
    
    const generateContactNumber = () => {
        const numStr = "000000" + (Math.random() * 1000000 | 0);
        setContactNumber(numStr.substring(numStr.length - 6));
    }

    const onSubmit = data =>{
        const form = document.querySelector('#contact-form');
        const statusMessage = document.querySelector('.status-message');
        console.log(data);
        generateContactNumber();

        sendForm('contact_form', 'template_mh463me', '#contact-form')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                setStatusMessage("I will be in contact soon!");
                statusMessage.className = "status-message success";
                setTimeout(()=> {
                statusMessage.className = 'status-message'
                }, 5000)
            form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                setStatusMessage("Failed to send message! Please try again later.");
                statusMessage.className = "status-message failure";
                setTimeout(()=> {
                statusMessage.className = 'status-message'
                }, 5000)
            });
    }
  

    const message = watch('message') || "";
    const messageCharsLeft = 1500 - message.length;
    return(
        <div id='contact' className='contact'>
            <motion.h2
                whileHover={{scale: 1.5}}
                >Let's Connect</motion.h2>
            <p className='status-message'>{statusMessage}</p>
            <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
            
                <input type='text'
                name='userName'
                maxLength='30'
                placeholder='Name'
                {...register('userName', {required: true})}
                />
                <br/>
                <input type='email' name='user_email' {...register('user_email', {required: true})} placeholder='Email' />
                <br/>
                <textarea name='message' {...register('message', {required: true})} placeholder='Message'/>
                <br/>
                <p className='message-chars-left'>{messageCharsLeft}</p>
                <input type='hidden' name='contact_number' value={contactNumber} />
                <input type='submit' value='Send' />
            </form>
        </div>
    )
}

export default Contact