import Brng from './Brng.js';
import Shelv from './Shelv.js';
import Geoexplorers from './Geoexplorers.js';
import '../../styles/projects.css';


const Projects = () => {
	return (
			<div className="projects-grid">
				<Brng />
				<Geoexplorers />
				<Shelv />
			</div>
	);
};
export default Projects;
