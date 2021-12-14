import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';

function App() {
	return (
		<>
			<Navigation logo={logo} />
			<Header />
		</>
	);
}

export default App;
