import React from "react"
import "./about.css"
import ME from "../../assets/about.jpg"

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="about_image" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <h5>Experience</h5>
                            <small>2+ Months Working</small>
                        </article>

                        <article className="about_card">
                            <h5>Clients</h5>
                            <small>4+ Embu</small>
                        </article>

                        <article className="about_card">
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>
                    <p>
                        The skilled programmer of the century. 
                        Coding is the bloodstream.
                    </p>
                    <p>
                        Lenny Graphic designers are focused on quality products 
                        which meet all customer requirements.  
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
