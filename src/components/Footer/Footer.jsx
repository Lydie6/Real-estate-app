import React from 'react'
import './Footer.css'
import logo from "../../assets/logo2.png"
const Footer = () => {
  return (
  <section className="f-wrapper">
    <div className="f-container flexCenter innerWidth paddings ">
        {/* left-side */}
        <div className="f-left flexColCenter">
        <img className="" src={logo} />
        <span className="">
          make all people  the baest 
            place to live for them
        </span>
     

        </div>
        {/* right side */}
        <div className="f-right flexColStart">
            <span className="primaryText">Information</span>
            <span className="secondaryText">45 Rue didouche mourad</span>
            <div className="f-menu flexCenter">
            <a href="">Residencies</a>
            <a href="">OurValue</a>
            <a href="">ContactUs</a>
            <a href="">GetStarted</a>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Footer
