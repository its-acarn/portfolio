import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
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
				<div className="main-div" data-scroll-section>
					<h1>Faster</h1>
					<p>Slower</p>
				</div>
				<div className="main-div" data-scroll-section>
					<h2>What's up?</h2>
					<p>😬</p>
				</div>
			</div>
		</>
	);
};

export default Main;
