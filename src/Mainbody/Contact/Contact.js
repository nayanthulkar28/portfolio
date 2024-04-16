import React, { useState } from "react";
import "./Contact.css";
import axios from "axios"

function Contact(props) {
  const [state, setState] = useState({
    nameValue: "",
    emailValue: "",
    messageValue: ""
  });

  function handleNameChange(event) {
    setState(s => ({...state, nameValue: event.target.value}));
  }

  function handleEmailChange(event) {
    setState(s => ({...state, emailValue: event.target.value}));
  }

  function handleMessageChange(event) {
    setState(s => ({...state, messageValue: event.target.value}));
  }

  const sendEmail = (e) => {
    e.preventDefault();

    axios.post("https://nayanchar.click/portfolio-be/v1/email", 
                {
                  name: e.target.name.value,
                  email: e.target.email.value,
                  message: e.target.message.value
                }, 
                {headers: 
                  {"p-api-key": "ZDdlZjZlMDgtMDY1MS00YjcyLWEzNDQtZGJiMTdiNzJlOTdj"}
                }
              ).then((res)=>{console.log(res)})
              .catch((error)=>{
                console.log(error)
              })
  }

  return (  
    <section className="contact-container" id="contact-jump">
      <div className="contact-parent">
        <h1>Contact Me</h1>
        <div className="contact-form">
          <form onSubmit={sendEmail}>
            <input type="text" name="name" value={state.nameValue} onChange = {handleNameChange} placeholder = 'Name' required/>
            <input type="email" name="email" value={state.emailValue} onChange = {handleEmailChange} placeholder = 'Email' required/>
            <br />
            <textarea name="message" placeholder = 'Message' onChange = {handleMessageChange} required>{state.messageValue}</textarea>
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
