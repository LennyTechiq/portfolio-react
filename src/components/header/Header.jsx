import React from "react"
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
//import HeaderSocial from "./HeaderSocials"

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>This is</h5>
                <h1>Lenny Techiq</h1>
                <h5 className="text-light">Programmer and Graphic Designer</h5>
                <CTA />

                <div className="me">
                    <img src={ME} alt="lenny.jpg" />
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header