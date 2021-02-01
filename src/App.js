import Main2 from './components/Main2';
import About from './components/mainComponents/About';
import { useMediaQuery } from 'react-responsive'

function App() {

	const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1024px)'})
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

	console.log("InnerWidth:" + window.innerWidth)
	console.log("OuterWidth:" + window.outerWidth)
	
	
	return (
		<>
			<Main2 />
		</>
	);
}

export default App;
