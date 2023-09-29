import "../styling/Footer.css"

import fbLogo from "../resources/site_images/facebook.png"

const Footer = () => {

    return (
        <div id="footerWrap">
            <div id="footer">
                <a href="https://www.facebook.com/sandyelidecorators">
                    <img style={{ width: "32px", marginTop: "10px" }} src={fbLogo} alt="fbLogo" />
                </a>
                <p id="navTel">07793 026865</p>
            </div>
        </div>

    )
}

export default Footer