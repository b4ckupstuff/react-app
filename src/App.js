import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import logo from './logo.svg';

import EntryForm from './components/EntryForm.';
import ThreeXThreeGrid from './components/ThreeXThreeGrid';

// import './App.css';


function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<EntryForm />
				</Route>
				<Route exact path="/result">
					<ThreeXThreeGrid />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
