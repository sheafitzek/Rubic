import React from 'react';

import './NotFound.css';

const NotFound = (props)=> {
	return(
		<div>
			<h2>There Seems to be an Error</h2>
			<p>Are You Sure That Those Users/Repos Exist?</p>
			<p>Did You Mix Users/Repos?</p>
			<p>Please Check Your Spelling & Try Again</p>
		</div>
	)
}

export default NotFound;
