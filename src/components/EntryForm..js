import React from 'react';
import { Link } from "react-router-dom";

function EntryForm() {
	return (
		<div className="App">
			<form className="form-signin">
				<div className="text-center mb-4">
				<img class="mb-4" src="logo.svg" alt="" width="72" height="72" />
					<h1 className="h3 mb-3 font-weight-normal">Heading Text</h1>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
						The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
				</div>

				<div className="form-label-group">
					<input type="text" id="inputEmail" className="form-control" placeholder="Full Name" required autofocus />
					<label for="inputEmail">Full Name</label>
				</div>

				<div className="form-label-group">
					<input type="date" id="inputPassword" className="form-control" placeholder="Date if Birth" required />
					<label for="inputPassword">Date of Birth</label>
				</div>

				<Link to="/result"><button className="btn btn-lg btn-primary btn-block" type="submit">Go</button></Link>
				<p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2020</p>
			</form>
		</div>
	);
}

export default EntryForm;