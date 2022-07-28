import './App.css';
import { HomePage } from './pages/HomePage.js';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<HomePage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
