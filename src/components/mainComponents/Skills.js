import '../../styles/skills.css';

const Skills = () => {
	return (
		<>
			<h2>Experience:</h2>
			<div class="skills-grid">
				<div class="row1-skill1">
					<img
						src="./assets/react.png"
						alt="react-logo"
						width="100"
					/>
				</div>
				<div class="row1-skill2">
					<img src="./assets/vue.png" alt="vue-logo" width="100" />
				</div>
				<div class="row1-dummy"></div>
				<div class="row2-dummy"></div>
				<div class="row2-skill1">
					<img
						src="./assets/js.jpg"
						alt="javascript-logo"
						width="100"
					/>
				</div>
				<div class="row2-skill2">
					<img
						src="./assets/mongo.webp"
						alt="mongo-logo"
						width="100"
					/>
				</div>
				<div class="row3-skill1">
					<img src="./assets/html.webp" alt="html-logo" width="100" />
				</div>
				<div class="row3-skill2">
					<img src="./assets/css.webp" alt="css-logo" width="100" />
				</div>
				<div class="row3-dummy"></div>
				<div class="row4-dummy"></div>
				<div class="row4-skill1">
					<img src="./assets/java.webp" alt="java-logo" width="100" />
				</div>
				<div class="row4-skill2">
					<img
						src="./assets/python.webp"
						alt="python-logo"
						width="100"
					/>
				</div>
			</div>
		</>
	);
};
export default Skills;
