import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Detail from './mainComponents/Detail';
import Skills from './mainComponents/Skills';
import Projects from './mainComponents/Projects';
import Scroll from './mainComponents/Scroll';
import About from './mainComponents/About';
import '../styles/main2.css';

const Main2 = () => {

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			direction: 'horizontal'
		});

	}, [])

	return (
			<>
					<main className="content" data-scroll-container>
						<div className="gallery">
							<section className="gallery-item detail">
								<Detail />
							</section>
							<section className="gallery-item scroll">
								<Scroll />
							</section>
							<section className="gallery-item about" data-scroll data-scroll-speed="3">
								<About />
							</section>
							<section className="gallery-item skills" data-scroll data-scroll-speed="3">
								<Skills />
							</section>
							<section className="gallery-item projects-title" data-scroll data-scroll-speed="2">
								<h1 className="projects-h1">PROJECTS...</h1>
							</section>
							<section className="gallery-item projects">
								<Projects />
							</section>
						</div>
					</main>
			</>
	);
};

export default Main2;
