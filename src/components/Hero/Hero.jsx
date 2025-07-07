import React from 'react'
import "./Hero.css"
import { HERO_CONTENT } from "../../constatnts/index.js"
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className=" innerWidth flexCenter hero-container">
                {/* left-side */}
                <div className="hero-left flexColStart">
                    <div className="hero-title">
                    <div className="orange-circle" ></div>
                    <h1 className="">Discover <br /> Most suitable <br /> property</h1>
                    </div>
                    <div className="hero-des flexColCenter">
                        <span className='secondaryText'>Find a variety of properties that suit you very easilt</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                        <span className="text-respScre" >Find a variety of properties that suit you very easilt
                        Forget all difficulties in finding a residence 
                        </span>
                    </div>
                    <div className="search-bar flexCenter">
                        <HiLocationMarker  color="var(--blue)" size={25} />
                        <input type='text'/>
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="stat flexColCenter">
                            <span className=''>
                                <CountUp start={8000} end={9000} duration={4}/>
                                <span>+</span>
                             </span>
                             <span className='secondaryText'>premieum products</span>
                        </div>

                        <div className="stat flexColCenter">
                            <span>
                                <CountUp start={1800} end={2000} duration={4}/>
                                <span>+</span>
                             </span>
                             <span className='secondaryText'>Happy customers</span>
                        </div>

                        <div className="stat flexColCenter ">
                            <span>
                                <CountUp  end={28}/>
                                <span>+</span>
                             </span>
                             <span className='secondaryText'>Awards Winnings</span>
                        </div>
                    </div>
                </div>
                {/* right-side */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img className="" src={HERO_CONTENT.image} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
