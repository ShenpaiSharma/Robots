import React, { useState } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import { robots } from "./robots";
import './App.css'


function App() {

	const [robo, setRoboList] = useState(robots);

	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(response => response.json())
	// 		.then(users => setRoboList({ robo: users}));
	// }


	function handleChange(event) {
		const value = event.target.value;
	
		const filteredRobots = robots.filter(robots => {
			return robots.name.toLowerCase().includes(value.toLowerCase());
		});

		setRoboList(filteredRobots);
	}

	

	return (
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<Searchbox 
				SearchChange={handleChange}
			/>
			<Scroll>
				<CardList
					robots={robo}
				/>
			</Scroll>
		</div>
	);
}

export default App;