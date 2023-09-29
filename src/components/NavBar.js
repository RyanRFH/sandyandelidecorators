import React from "react"

import '../styling/NavBar.css'

import { Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div id="navBarCont">
            <a id="navTitleWrap" href="https://www.facebook.com/sandyelidecorators">
                <h1 id="navTitle">Sandy & Eli Decorators</h1>
            </a>
            
            <h3 id="navTel">07793 026865</h3>

            <div id="navLinks">
                <Link className="linkText" to="/">Home</Link>
                <Link className="linkText" to="/reviews">Reviews</Link>
            </div>

        </div>

    )
}

export default NavBar