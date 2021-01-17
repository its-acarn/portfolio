import React, { useEffect, useRef } from 'react';
import "../../styles/getInTouch.css"

const GetInTouch = () => {

  const divRef = useRef();
  const getDOMrect = () => console.log(divRef.current.getBoundingClientRect());
  const setPos = () => {
    getDOMrect();
    divRef.current.style.position = "absolute";
    divRef.current.style.left = "200px";
    divRef.current.style.top = "200px"
  }
  
  useEffect(() => {
    setPos();
  },[])
  

  return (
		<div ref={divRef} className="getInTouch" >
			<h2>Get In Touch</h2>
		</div>
	);
};

export default GetInTouch;