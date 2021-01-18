import React, { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Detail from './mainComponents/Detail';
import Skills from './mainComponents/Skills';
import Projects from './mainComponents/Projects';
import '../styles/main2.css';

const Main2 = () => {

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			direction: 'horizontal'
		});
	}, []);

	return (
		<>
			<header className="HEADER2"></header>
			<main className="main-grid2" data-scroll-container>
				<div className="content">
					<div className="gallery">
						<section className="gallery-item detail">
							<Detail />
						</section>
						<section className="gallery-item skills" data-scroll data-scroll-speed="-1">
							<Skills />
						</section>
						<section className="gallery-item projects-title" data-scroll data-scroll-speed="2">
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
