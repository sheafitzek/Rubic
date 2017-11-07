import React from 'react';

import './NotFound.css';

import PropTypes from 'prop-types';

class NotFound extends React.Component{
	constructor(props) {
		super(props);

		this.goToPlayerSelect = this.goToPlayerSelect.bind(this);
	}

	goToPlayerSelect() {
		this.context.router.history.push(`/`);
	}
	render(){
		return(
			<div>
				<h2>There Seems to be an Error</h2>
				<p>Are You Sure That Those Both Users Exist?</p>
				<p>Please Check Your Spelling & Try Again</p>

				<button className="try-again" onClick={this.goToPlayerSelect}>Try Again</button>
			</div>
		)
	}

}

// needed to access BrowserRouter from index.js & compose the route above
NotFound.contextTypes = {
	router : PropTypes.object.isRequired,
};

export default NotFound;
