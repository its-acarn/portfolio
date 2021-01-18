import '../../styles/detail.css';

const Detail = () => {
	return (
		<>
			<h1 className="name" data-scroll data-scroll-speed="2">
				<span>A</span>NDREW
			</h1>
			<h1 className="name" data-scroll data-scroll-speed="3">
				&nbsp;&nbsp;&nbsp;<span>CARN</span>AGHAN.
			</h1>
			{/* <p className="role1">Hey, I'm Andrew.</p> */}
			<div className="role-container" data-scroll data-scroll-speed="2">
			<p className="role2">I am a <span className="greenText">Software Developer</span> <br/> and <span className="greenText">Web Designer</span> <br/> based in Edinburgh.</p>
	
			</div>
			
			
		</>
	);
};
export default Detail;
