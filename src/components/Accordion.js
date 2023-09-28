import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './Accordion.css';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();

  const props = useSpring({
    height: isOpen ? contentRef.current.scrollHeight : 0
  });

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      <animated.div className="accordion-content-wrapper" style={props}>
        <div ref={contentRef} className="accordion-content">
          {content}
        </div>
      </animated.div>
    </div>
  );
}

export default Accordion;