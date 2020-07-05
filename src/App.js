import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import EntryFormContainer from './containers/EntryFormContainer';
import ResultContainer from "./containers/ResultContainer";
import AdminHomeContainer from "./containers/AdminHomeContainer";
import AdminFormContainerEditExisting from "./containers/AdminFormContainerEditExisting";
import AdminFormContainerCreateNew from "./containers/AdminFormContainerCreateNew";

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
				<Route exact path="/admin">
					<AdminHomeContainer />
				</Route>
				{/*<Route exact path="/admin">
					<AdminFormContainerOld />
				</Route>*/}
				<Route path="/admin/edit/:a/:b" component={AdminFormContainerEditExisting}>
					{/*<AdminFormContainerEditExisting a={k} b={v} />*/}
				</Route>
				<Route path="/admin/new/:a" component={AdminFormContainerCreateNew}>
					{/*<AdminFormContainerEditExisting a={k} b={v} />*/}
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
