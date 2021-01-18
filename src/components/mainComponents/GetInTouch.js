import React, { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../customHooks/useWindowDimensions.js'
// import "../../styles/getInTouch.css"

const GetInTouch = ({mainRect}) => {

  // const {viewHeight, viewWidth} = useWindowDimensions();
  // const [x, setX] = useState(0);

  // let contentRight = mainRect.width;
  // console.log(contentRight)
  // console.log(viewHeight)
  // console.log(viewWidth)

  // const scrollX = () => {
  //   setX(window.pageXOffset);
  //   console.log("pageXOffset:" + x);}

  //   const watchScroll = () => {
  //     window.addEventListener("click", () => {scrollX();});
  //   }


  // const divRef = useRef();
  // const getDOMrect = () => console.log(divRef.current.getBoundingClientRect());
  // const setPos = () => {
  //   divRef.current.style.position = "absolute";
  //   divRef.current.style.left = "700px";
  //   divRef.current.style.top = "200px"
  //   divRef.current.style.backgroundColor = "#5cdb95"
  //   getDOMrect();
  // }
  
  // useEffect(() => {
  //   setPos();
  //   watchScroll();
  // },[x])
  

  return (
		<div className="getInTouch" data-scroll data-scroll-speed='4' >
			<h2>Get In Touch</h2>
		</div>
	);
};

export default GetInTouch;