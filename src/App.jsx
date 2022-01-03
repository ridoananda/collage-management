import logo from "./logo.svg";
import "./App.css";
import Router from "./router";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<div className="py-4">
				<Router />
			</div>
		</div>
	);
}

export default App;
