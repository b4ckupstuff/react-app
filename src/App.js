import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import EntryFormContainer from './containers/EntryFormContainer';
import ResultContainer from "./containers/ResultContainer";

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
			</Switch>
		</Router>
	);
}

export default App;
