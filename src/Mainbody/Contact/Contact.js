import React from "react";
import "./Contact.css";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            emailValue: '',
            messageValue: '',
        };
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
    }
    handleName(event) {
        this.setState({
            nameValue: event.target.value,
        });
    }
    handleEmail(event) {
        this.setState({
            emailValue: event.target.value,
        });
    }
    handleMessage(event) {
        this.setState({
            messageValue: event.target.value,
        });
    }
  render() {
      const nameValue = this.state.nameValue;
      const emailValue = this.state.emailValue;
      const messageValue = this.state.messageValue;
    return (
      <section className="contact-container" id="contact-jump">
        <div className="contact-parent">
          <h1>Contact Me</h1>
          <div className="contact-form">
            <form>
              <input type="text" name="name" value={nameValue} onChange = {this.handleName} placeholder = 'Name'/>
              <input type="email" name="email" value={emailValue} onChange = {this.handleEmail} placeholder = 'Email'/>
              <br />
              <textarea name="message" placeholder = 'Message' onChange = {this.handleMessage}>{messageValue}</textarea>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
