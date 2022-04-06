import React from "react"
import "./nav.css"
//import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/ai"
import {RiServiceLine} from "react-icons/ai"
import {BiMessageSquareDetail} from "react-icons/ai"
import { useState } from "react"

const Nav = () => {
    const [setActiveNav] = useState("#")
    return (
        <nav>
            <a href="#about" onClick={() => setActiveNav("#about")}><AiOutlineUser/></a>
            <a href="#experience" onClick={() => setActiveNav("#experience")}><BiBook/></a>
            <a href="#services" onClick={() => setActiveNav("#services")}><RiServiceLine/></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")}><BiMessageSquareDetail/></a>
        </nav>
    )
}

export default Nav