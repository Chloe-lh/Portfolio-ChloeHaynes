import React, { useState } from 'react';
import './contact.css';

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    return(
        <section className="contact-container">
            <h1>Lets Chat!</h1>
        </section>
    )
}


