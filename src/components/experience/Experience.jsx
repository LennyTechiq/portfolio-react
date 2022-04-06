import React from "react"
import "./experience.css"
//import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="design_experience">
                    <h3>Graphic Design</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <div>
                                <h4>Posters</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <div>
                                <h4>Calendars</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <div>
                                <h4>Certificates</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <div>
                                <h4>Eulogies</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <div>
                                <h4>Plastic ID's</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <div>
                                <h4>Business Cards</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="programming_experience">
                    <h3>Fullstack Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <div>
                                <h4>Javascript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience 