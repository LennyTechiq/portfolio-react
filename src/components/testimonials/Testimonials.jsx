import React from "react"
import "./testimonials.css"
import AVTR1 from "../../assets/avtr1.jpg"

const data = [
    {
        avatar: AVTR1,
        name: "Eric",
        review: "Thank you for the great work you did for me. Your skills are actually excellent. I appreciate all the integrity in projects."
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials_container">
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <article key={index} className="testimonial">
                                <div className="client_avatar">
                                    <img src={avatar} alt="client 1 pic" />
                                </div>
                                <h5 className="client_name">{name}</h5>
                                <small className="client_review">{review}</small>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonials