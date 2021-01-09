import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Detail from './mainComponents/Detail';
import About from './mainComponents/About';
import Skills from './mainComponents/Skills';
import Project1 from './mainComponents/Project1';
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
			<div className="main-grid" data-scroll-container>
				<div className="HEADER"></div>
				<div className="m1" data-scroll-section>
					<Detail />
				</div>
				<div className="m2" data-scroll-section>
					<Skills />
				</div>
				<div className="m3" data-scroll-section>
					<h1 className="projects-h1">PROJECTS</h1>
				</div>
				<div className="m4" data-scroll-section>
					<Project1 />
				</div>
				<div className="FOOTER"></div>
			</div>
		</>
	);
};

export default Main;
