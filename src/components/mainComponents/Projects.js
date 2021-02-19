import Brng from './Brng.js';
import Shelv from './Shelv.js';
import Geoexplorers from './Geoexplorers.js';
import '../../styles/projects.css';

const Projects = () => {
	const size = () => {
		const breakpoint = 1024;
		if (window.innerWidth > breakpoint) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div className="projects-grid">
			<Brng size={size} />
			<Geoexplorers size={size} />
			<Shelv size={size} />
		</div>
	);
};
export default Projects;
