import React from 'react';
import { Swiper, SwiperSlide,useSwiper} from 'swiper/react';
import "swiper/css";
import "./Logements.css";
import data from '../../constatnts/slider.json'
import {sliderSettings} from '../../constatnts/common.jsx'

const Logements = () => {
  return (
    <section className="l-wrapper">
    
      <div className="paddings innerWidth l-container">
        <div className="l-head flexColStart">
            <span className='orangeText'>Best choice</span>
            <span className='primaryText'>Popular residencies</span>
        </div>
        <Swiper {...sliderSettings}>
            <SliderButtons/>
         {
            data.map((card,i)=>(
                <SwiperSlide key={i} >
                    <div className="l-card flexColStart">
                        <img className="" src={card.image} />
                        <span className=" l-price secondaryText">
                            <span style={{color:"orange"}}>$</span>
                            <span className="">{card.price}</span>
                        </span>
                        <span className="primaryText">{card.name}</span>
                        <span className="secondaryText">{card.detail}</span>
                    </div>

                </SwiperSlide>
            ))
         }
        </Swiper>

      </div>
    </section>
  );
}

export default Logements;
const SliderButtons=()=>{
    const swiper=useSwiper();
    return (
        <div className="l-button flexCenter">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}