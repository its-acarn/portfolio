import '../../styles/skills.css';

const Skills = () => {
	return (
		<article className="skills-article">
			<h2 className="skills-h2">Skills</h2>
				<div className="skills-grid">
					<div className="row1-skill1">
						<img src="./assets/js.jpg" alt="javascript-logo" />
					</div>
					<div className="row1-skill2">
						<img src="./assets/html.webp" alt="html-logo" />
					</div>

					<div className="row2-skill1">
						<img src="./assets/react.png" alt="react-logo" />
					</div>
					<div className="row2-skill2">
						<img src="./assets/css.webp" alt="css-logo" />
					</div>
					<div className="row3-skill1">
						<img src="./assets/vue.png" alt="vue-logo" />
					</div>
					<div className="row3-skill2">
						<img src="./assets/mongo.webp" alt="mongo-logo" />
					</div>
					<div className="row4-skill1">
						<img src="./assets/python.webp" alt="python-logo" />
					</div>
					<div className="row4-skill2">
						<img src="./assets/java.webp" alt="java-logo" />
					</div>
				</div>
		</article>
	);
};
export default Skills;
