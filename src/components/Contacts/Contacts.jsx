import React from 'react'
import "./Contacts.css"
import imageContact from "../../assets/contact.jpg"
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contacts = () => {
  return (
    <section className="c-wrapper">
      <div className="innerWidth flexCenter padding c-container">
        {/* left-side */}
        <div className="c-left flexColStart">
          <span className="orangeText">Our contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet,
            consectetur adipisci elit,<br /> sed eiusmod tempor incidunt
            ut labore et dolore magna aliqua
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className=" icon ">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText1">call</span>
                    <span className="secondaryText">0567678990</span>
                  </div>
                </div>
                <div className="flexCenter button">call now</div>
              </div>
              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className=" icon ">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText1">Chat</span>
                    <span className="secondaryText">0567678990</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>

            </div>


            {/* second row */}
            <div className="flexStart row">
              {/* Third mode*/}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className=" icon ">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText1">video</span>
                    <span className="secondaryText">0567678990</span>
                  </div>
                </div>
                <div className="flexCenter button">call now</div>
              </div>
              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className=" icon ">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText1">Message</span>
                    <span className="secondaryText">0567678990</span>
                  </div>
                </div>
                <div className="flexCenter button">Message now</div>
              </div>

            </div>
          </div>
        </div>

        {/* right-side */}
        <div className="c-right">
          <div className="image-container">
            <img src={imageContact} alt="Contact" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts