import React, { Component, Fragment } from 'react';
import Transport from './transport';
import Rating from './rating';
import Worktime from './worktime';
import BriefInfo from './briefinfo';

class Modal extends Component {
	state = {
		active: false,
	}

	render() {

		return (
		<Fragment>
		{this.state.active &&
			<div style={{background: '#eee', padding: 20}}>
				<span style={{float: 'right', width: 10, margin: '0 20px', cursor: 'pointer'}} onClick={this.hideModal}>X</span>
			  <BriefInfo info={this.props.info.poliData} onShowDetail={this.hideModal} />
				<Transport info={this.props.info.transportData} />
				<Rating info={this.props.info.rating} />
				<Worktime info={this.props.info.openingHours} />
			</div>
		}
		</Fragment>		
		)
	}
}

export default Modal;