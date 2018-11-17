import React, { Component } from 'react';
import Metro from './metro';
import Gortrans from './gortrans';

class Transport extends Component {
	render() {
		return (
			<div>
				<p><strong>Как добраться:</strong></p>
				<Metro info={this.props.info.subwayStations} />
				<Gortrans info={this.props.info.transportStations} />
			</div>
		)
	}
}

export default Transport;