import React from 'react';
import './Contact.css'

function Contact(props) {
    return (
        <section className = 'contact-container'>
            <div className = 'contact-parent'>
                <h1>Contact Me</h1>
                <div className = 'contact-form'>
                    <form>
                        <input type = 'text' name = 'name' value = 'name' />
                        <input type = 'email' name = 'email' value = 'email' />
                        <br />
                        <input type = 'text' name = 'message' value = 'message' />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;