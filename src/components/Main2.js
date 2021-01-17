import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Detail from './mainComponents/Detail';
import Skills from './mainComponents/Skills';
import Projects from './mainComponents/Projects';
import GetInTouch from './mainComponents/GetInTouch';
import '../styles/main2.css';

const Main2 = () => {

	const mainRef = useRef();
	const getMainRect = () => console.log(mainRef.current.getBoundingClientRect());
	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			direction: 'horizontal'
		});
		getMainRect()
	}, []);

	return (
		<>
			<header className="HEADER2"></header>
			<main ref={mainRef} className="main-grid2" data-scroll-container>
				<GetInTouch/>
				<div className="content">
					<div className="gallery">
						<section className="gallery-item detail">
							<Detail />
						</section>
						<section className="gallery-item skills">
							<Skills />
						</section>
						<section className="gallery-item projects-title">
							<h1 className="projects-h1">PROJECTS...</h1>
						</section>
						<section className="gallery-item projects">
							<Projects />
						</section>
					</div>
				</div>
			</main>
			<footer className="FOOTER2"></footer>
		</>
	);
};

export default Main2;
