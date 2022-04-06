import React from "react"
import "./portfolio.css"
import IMG4 from "../../assets/IMG4.jpg"
//import IMG6 from "../../assets/job.png"

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG4} alt="home_photo" />
                    </div>
                    <h3>Employee Management System</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com" className="btn" target="_blank" rel="noreferrer">Github</a>
                        <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                {/* <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG6} alt="login_photo" />
                    </div>
                    <h3>Certificate</h3>
                </article> */}
            </div>
        </section>
    )
}

export default Portfolio