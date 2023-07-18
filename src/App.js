import SideNavBar from "./Components/SideNavBar/SideNavBar";
import Apps from "./Components/Dashboard/dashboard";
import React from "react";
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
