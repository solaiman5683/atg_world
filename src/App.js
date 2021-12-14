import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';

function App() {
	return (
		<>
			<Navigation logo={logo} />
		</>
	);
}

export default App;
