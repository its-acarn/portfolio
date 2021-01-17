import React, { useEffect, useRef, useState } from 'react';
import "../../styles/getInTouch.css"

const GetInTouch = () => {



  const divRef = useRef();
  const getDOMrect = () => console.log(divRef.current.getBoundingClientRect());
  const setPos = () => {
    divRef.current.style.position = "absolute";
    divRef.current.style.left = "1800px";
    divRef.current.style.top = "200px"
    getDOMrect();
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