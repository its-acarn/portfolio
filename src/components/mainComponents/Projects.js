import Brng from './Brng.js';
import Shelv from './Shelv.js';
import '../../styles/projects.css';
import Geoexplorers from './Geoexplorers.js';

const Projects = () => {
	return (
		<>
			<div className="projects-grid">
				<Brng />
				<Geoexplorers />
				<Shelv />
				<div className="projects-grid-item"></div>
			</div>
		</>
	);
};
export default Projects;
