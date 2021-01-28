import '../../styles/scroll.css';

const Scroll = () => {
	return (
		<div className="scroll-item" data-scroll data-scroll-speed="2">
			{/* <div className="scroll-downs">
  			<div className="mousey">
    			<div className="scroller"></div>
  			</div>
			</div> */}
			<div className="scroll-arrows">
				<div className="scroll-arrow"></div>
				<div className="scroll-arrow delay2"></div>
				<div className="scroll-arrow delay3"></div>
			</div>
			
		</div>
	);
};
export default Scroll;