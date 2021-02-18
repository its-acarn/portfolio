import React, { useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Detail from './mainComponents/Detail';
import Skills from './mainComponents/Skills';
import Projects from './mainComponents/Projects';
import Scroll from './mainComponents/Scroll';
import About from './mainComponents/About';
import '../styles/main2.css';

const Main2 = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 1024;

	const changeScroll = (scroll) => {
		width > breakpoint
			? (scroll.direction = 'horizontal')
			: (scroll.direction = 'vertical');
		width > breakpoint
			? (scroll.options.direction = 'horizontal')
			: (scroll.options.direction = 'vertical');
	};

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			direction: 'horizontal',
			scrollFromAnywhere: true,
			reloadOnContextChange: true
		});

		function handleResize() {
			setWidth(window.innerWidth);
			changeScroll(scroll);
			console.log(scroll);
		}
		window.addEventListener('resize', handleResize);

		return (_) => {
			window.removeEventListener('resize', handleResize);
		};
	});

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
					<section
						className="gallery-item about"
						data-scroll
						data-scroll-speed="3"
					>
						<About />
					</section>
					<section
						className="gallery-item skills"
						data-scroll
						data-scroll-speed="3"
					>
						<Skills />
					</section>
					<section
						className="gallery-item projects-title"
						data-scroll
						data-scroll-speed="2"
					>
						<h1 className="projects-h1">PROJECTS...</h1>
					</section>
					<section
						className="gallery-item projects"
						data-scroll
						data-scroll-speed="3"
					>
						<Projects />
					</section>
				</div>
			</main>
		</>
	);
};

export default Main2;
