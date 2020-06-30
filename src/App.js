import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import EntryFormContainer from './containers/EntryFormContainer';
import ResultContainer from "./containers/ResultContainer";
import AdminFormContainer from "./containers/AdminFormContainer";
import AdminHome from "./containers/AdminHome";

// import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<EntryFormContainer />
				</Route>
				<Route exact path="/result">
					<ResultContainer />
				</Route>
				<Route exact path="/admin-home">
					<AdminHome />
				</Route>
				<Route exact path="/admin">
					<AdminFormContainer />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
