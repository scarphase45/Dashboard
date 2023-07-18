import SideNavBar from "./Components/SideNavBar/SideNavBar";
import Apps from "./Components/Dashboard/dashboard";
// import TopContent from "./Components/NavBar/navBar";
import './App.scss'

function App() {
	return (
		<div className="app">
			<SideNavBar />
			<Apps />
		</div>
	);
}

export default App;
