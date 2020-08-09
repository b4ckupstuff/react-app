import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import DismissableAlert from "../components/DismissableAlert";
const apiEndpoint = process.env.REACT_APP_URL;

function EntryFormContainer() {

	const history = useHistory();
	const [spinnerLoadingState, changeSpinnerLoadingState] = useState(false);
	const [showAlert, changeShowAlert] = useState(false);
	const [alertCode, changeAlertCode] = useState("");
	const [alertMessage, changeAlertMessage] = useState("");

	const validateInput = (fullName, dateOfBirth) => {
		try {
			new Date(dateOfBirth);
		} catch(err) {
			console.log(err);
			return false;
		}
		return dateOfBirth.length && (fullName.match(/\w+( \w+)*/g) || []).length;
	};

	const handleOnClick = () => {
		let fullName = document.getElementById("inputEmail").value;
		let dateOfBirth = document.getElementById("inputPassword").value;
		changeSpinnerLoadingState(true);
		let validationResult = validateInput(fullName, dateOfBirth);
		if(validationResult) {
			// make api call
			fetch(`${apiEndpoint}/bPMAVm`, {
				method: "post",
				headers: {
					"Content-Type": "application/json",
					"Accept": "*/*"
				},
				body: JSON.stringify({
					fullName,
					dateOfBirth
				})
			})
				.then(e => e.json())
				.then(e => {
					changeSpinnerLoadingState(false);
					history.push(`/result`, e);
				}).catch(err => console.log(err));
		} else {
			// show error alert
			changeSpinnerLoadingState(false);
			changeShowAlert(true);
			changeAlertCode("Error!");
			changeAlertMessage("Make sure to enter the name and date of birth correctly.");
		}
	};

	return (
		<div className="App">

			{ showAlert &&
				<DismissableAlert
					code={alertCode}
					message={alertMessage}
				/>
			}

			<form className="form-signin" action="#">
				<div className="text-center mb-4">
				<img className="mb-4" src="logo.svg" alt="" width="72" height="72" />
					<h1 className="h3 mb-3 font-weight-normal">Heading Text</h1>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
						The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
				</div>

				<div className="form-label-group">
					<input type="text" id="inputEmail" className="form-control" placeholder="Full Name" required autoFocus />
					<label htmlFor="inputEmail">Full Name</label>
				</div>

				<div className="form-label-group">
					<input type="date" id="inputPassword" className="form-control" placeholder="Date of Birth" required />
					<label htmlFor="inputPassword">Date of Birth</label>
				</div>

				{
					!(spinnerLoadingState) ?
						<button className="btn btn-lg btn-info btn-block" type="status" onClick={handleOnClick}>
							Go
						</button>
						:
						<button className="btn btn-lg btn-info btn-block" type="status" onClick={handleOnClick} disabled>
							<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
						</button>
				}
				<p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2020</p>
			</form>
		</div>
	);
}

export default EntryFormContainer;