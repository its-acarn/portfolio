const Geoexplorers = ({ size }) => {
	return (
		<article className="projects-grid-item-wrapper">
			<div className="projects-grid-item geoexplorers">
				{size() ? (
					<img src="./assets/geoexplorers.png" alt="" />
				) : (
					<></>
				)}
				<h2 className="greenText">Geoexplorers</h2>
				<div className="pgi-div">
					<a
						href="https://github.com/its-acarn/geoexplorers"
						rel="noreferrer"
					>
						<svg
							className="project-links"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>BRNG Sports Github Repo link</title>
							<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
						</svg>
					</a>
					<a
						href="http://geoexplorers.herokuapp.com/"
						rel="noreferrer"
					>
						<svg
							className="project-links"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							version="1.1"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<title>BRNG Sports Website</title>
							<path d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
						</svg>
					</a>
				</div>
			</div>
		</article>
	);
};
export default Geoexplorers;
