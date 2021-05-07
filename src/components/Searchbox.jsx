import React from 'react';

function Searchbox(props) {
	return (
		<input
			className='pa3 ba b--green bg-lightest-blue' 
			onChange={props.SearchChange}
			type="search" 
			placeholder="Search Robots" 
		/>
	);
}

export default Searchbox;