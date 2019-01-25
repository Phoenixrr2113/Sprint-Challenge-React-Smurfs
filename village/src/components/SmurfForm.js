import React from 'react';
// import axios from 'axios';

const SmurfForm = props => {
	// class SmurfForm extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		name: '',
	// 		age: '',
	// 		height: '',
	// 	};
	// }

	// addSmurf = event => {
	// 	event.preventDefault();
	// 	const newSmurf = {
	// 		name: this.state.name,
	// 		age: this.state.age,
	// 		height: this.state.height,
	// 	};
	// 	axios
	// 		.post(`http://localhost:3333/smurfs`, newSmurf)
	// 		.then(res => {
	//       this.props.history.push('/');

	// 		})
	// 		.catch(err => console.log(err));

	// 	this.setState({
	// 		name: '',
	// 		age: '',
	// 		height: '',
	// 	});
	// };

	// handleInputChange = e => {
	// 	this.setState({ [e.target.name]: e.target.value });
	// };

	// render() {
	return (
		<div className="SmurfForm">
			<form onSubmit={props.addSmurf}>
				<input
					onChange={props.handleInputChange}
					placeholder="name"
					value={props.name}
					name="name"
				/>
				<input
					onChange={props.handleInputChange}
					placeholder="age"
					value={props.age}
					name="age"
				/>
				<input
					onChange={props.handleInputChange}
					placeholder="height"
					value={props.height}
					name="height"
				/>
				<button type="submit">Add to the village</button>
			</form>
		</div>
	);
	// }
};

export default SmurfForm;
