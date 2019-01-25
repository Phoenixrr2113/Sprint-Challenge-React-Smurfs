import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: [],
			name: '',
			age: '',
			height: '',
		};
	}
	componentDidMount() {
		axios
			.get(`http://localhost:3333/smurfs`)
			.then(res => {
				this.setState({
					smurfs: res.data,
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	addSmurf = event => {
		event.preventDefault();
		const newSmurf = {
			name: this.state.name,
			age: this.state.age,
			height: this.state.height,
		};
		axios
			.post(`http://localhost:3333/smurfs`, newSmurf)
			.then(res => {
				this.setState({
					smurfs: res.data,
				});
				this.props.history.push('/');
			})
			.catch(err => console.log(err));

		this.setState({
			name: '',
			age: '',
			height: '',
		});
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div className="App">
				<NavLink to="/form">Add Smurf</NavLink>
				<Switch>
					<Route
						path="/form"
						render={props => (
							<SmurfForm
								{...props}
								addSmurf={this.addSmurf}
								handleInputChange={this.handleInputChange}
							/>
						)}
					/>
					<Route
						path="/"
						render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
