import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import LocomotiveScroll from 'locomotive-scroll';
import Detail from './mainComponents/Detail';
import Skills from './mainComponents/Skills';
import Projects from './mainComponents/Projects';
import Scroll from './mainComponents/Scroll';
import About from './mainComponents/About';
import '../styles/main2.css';

const Main2 = () => {

	const [scrollDirection, setScrollDirection] = useState('horizontal')

	const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			direction: scrollDirection
		});
	}, []);

	return (
		<>
			{ isDesktopOrLaptop &&
			<>
				<header className="HEADER2"></header>
				<main className="main-grid2" data-scroll-container>
					<div className="content">
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
					</div>
				</main>
			<footer className="FOOTER2"></footer>
			</>
		}
		{isTabletOrMobile && <div>MOBILE</div>}
		</>
	);
};

export default Main2;
