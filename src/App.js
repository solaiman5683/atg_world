import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Filter from './Components/Filter/Filter';
import MainContent from './Components/MainContent/MainContent';

function App() {
	return (
		<>
			<Navigation logo={logo} />
			<div className='mt-5'>
				<Header />
				<Filter />
				<MainContent />
			</div>
		</>
	);
}

export default App;
