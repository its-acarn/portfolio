import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Detail from '../src/components/mainComponents/Detail';
import '../styles/main.css';

const Main = () => {
	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			direction: 'horizontal'
		});
	}, []);

	return (
		<>
			<div className="main" data-scroll-container>
				{/* <div className="main-main" data-scroll-section> */}
				<div className="main-div" data-scroll-section>
					<h1>Faster</h1>
					<p>Slower</p>
				</div>
				<div className="main-div" data-scroll-section>
					<h2>What's up?</h2>
					<p>😬</p>
				</div>
				<section className="main-div" data-scroll-section>
					<Detail />
				</section>
				<section className="main-div" data-scroll-section>
					<Detail />
				</section>
				{/* </div> */}
			</div>
		</>
	);
};

export default Main;
