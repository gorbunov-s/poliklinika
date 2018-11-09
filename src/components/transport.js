import React, { Component } from 'react';
import Metro from './metro';
import Gortrans from './gortrans';

class Transport extends Component {
	render() {
		//console.log('from transport',this.props.info);
		return (
			<div>
				<p><strong>Как добраться:</strong></p>
				<Metro info={this.props.info.metro} />
				<Gortrans info={this.props.info.trans} />
			</div>
		)
	}
}

export default Transport;