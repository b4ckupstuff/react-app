import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import EntryFormContainer from './containers/EntryFormContainer';
import ResultContainer from "./containers/ResultContainer";
import AdminFormContainerOld from "./containers/AdminFormContainerOld";
import AdminHomeContainer from "./containers/AdminHomeContainer";
import AdminFormContainer from "./containers/AdminFormContainer";

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
					<AdminHomeContainer />
				</Route>
				<Route exact path="/admin">
					<AdminFormContainerOld />
				</Route>
				<Route path="/admin/edit/:a/:b" component={AdminFormContainer}>
					{/*<AdminFormContainer a={k} b={v} />*/}
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
