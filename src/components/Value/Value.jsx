import React, { useState } from 'react';
import './Value.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { FaCheck, FaTimes, FaCircle } from 'react-icons/fa'; // Ajout d'icônes
import image from '../../assets/value.png';
import data from '../../constatnts/accordion.jsx';

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img className="" src={image} alt="Value" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              // Définir une icône spécifique pour chaque élément
              const getIcon = () => {
                if (i === 0) return <FaCheck />;
                if (i === 1) return <FaTimes />;
                if (i === 2) return <FaCircle />;
                return null;
              };

              return (
                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading className='AccordionItemHeading'>

                    <AccordionItemButton className="accordionButton flexCenter">
                      <AccordionItemState>
                        {({ expanded }) => {
                          expanded ? setClassName("expanded") : setClassName("collapsed");
                        }}
                      </AccordionItemState>
                      <div className="icon icon-left">{getIcon()}</div>
                      <span className="title-text secondaryText">{item.heading}</span>
                      <div className="icon icon-right">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="secondaryText AccordionItemPanel">{item.detail}</AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;