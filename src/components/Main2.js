import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Detail from './mainComponents/Detail';
import About from './mainComponents/About';
import Skills from './mainComponents/Skills';
import Project1 from './mainComponents/Project1';
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
						<div className="gallery-item detail">
							<Detail />
						</div>
						<div className="gallery-item skills">
							<Skills />
						</div>
						<div className="gallery-item projects-title">
							<h1 className="projects-h1">PROJECTS...</h1>
						</div>
						<div className="gallery-item brng">
							<Project1 />
						</div>
					</div>
				</div>
			</main>
			<footer className="FOOTER2"></footer>
		</>
	);
};

export default Main2;
