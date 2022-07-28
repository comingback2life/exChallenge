import './App.css';
import { HomePage } from './pages/HomePage.js';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<HomePage />}></Route>
				</Routes>
			</BrowserRouter>
			<ToastContainer position="top-right" autoClose={2000} />
		</div>
	);
}

export default App;
