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
			<div data-scroll-container>
				<div data-scroll-section>
					<h1 data-scroll-gary>Hey</h1>
					<p data-scroll>👋</p>
				</div>
				<div data-scroll-section>
					<h2 data-scroll-speed="1">What's up?</h2>
					<p data-scroll-speed="2">😬</p>
				</div>
			</div>
		</>
	);
};

export default Main;
