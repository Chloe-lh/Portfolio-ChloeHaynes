import React, { useState } from 'react';
import './contact.css';
import emailjs from "emailjs-com"
export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    emailjs.init("")
    const handleChange = (e) =>{
        setForm({name:"", email:"", message:""});
    }
    const handleSubmit = (e) =>{
        e.preventDefailt();
        emailjs.send(
            "service_yis4ztb",
            "template_mw76eec",
            form,
            "00aBhkGZ7c8MH7fw8"
        )
        .then(
            (result) => {
                console.log("Message submitted");
                alert("Message sent!");
                setForm({name: "", email:"", message:""});
            },
            (error) => {
                console.error("Error sending email: ", error.text);
                alert("Failed to send message");
            }
        )
    }

    return(
        <section className="contact-container">
            <h1>Lets Chat!</h1>
            <form>
                <input className="nameInput" 
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required/>
                <input className="emailInput"
                type="text"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required/>
                <input className="messageInput"
                type="text"
                name="message"
                placeholder="message"
                value={form.message}
                onChange={handleChange}
                required/>
                
            </form>
        </section>
    )
}


