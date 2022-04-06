import React from "react"
import "./contact.css"
//import {MdOutlineEmail} from "react-icons/md"
//import {RiMessenger} from "react-icons/ri"
//import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Us</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <h4>Email</h4>
                        <h5>leonardrongoma3@gmail.com</h5>
                        <a href="mailto:leonardrongoma3@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <h4>Messenger</h4>
                        <h5>Lenny Techiq</h5>
                        <a href="https://m.me/" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <h4>Whatsapp</h4>
                        <h5>Lenny Techiq</h5>
                        <a href="https://api.whatsapp.com/send?phone=+254788492445" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name="name" placeholder="Your full name" required/>
                    <input type="email" name="email" placeholder="Your email" required/>
                    <textarea name="message" id="" rows="7" placeholder="Your message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact