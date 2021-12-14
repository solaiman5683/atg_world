import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Filter from './Components/Filter/Filter';

function App() {
	return (
		<>
			<Navigation logo={logo} />
			<Header />
			<div className='container'>
				<Filter />
			</div>
		</>
	);
}

export default App;
