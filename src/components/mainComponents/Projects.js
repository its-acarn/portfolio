import Brng from './Brng.js';
import Shelv from './Shelv.js';
import '../../styles/projects.css';

const Projects = () => {
	return (
		<>
			<div className="projects-grid">
				<Brng />
				<div className="projects-grid-item"></div>
				<Shelv />
				<div className="projects-grid-item"></div>
			</div>
		</>
	);
};
export default Projects;
