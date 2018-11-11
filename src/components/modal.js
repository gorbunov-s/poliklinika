import React, { Component, Fragment } from 'react';
import Transport from './transport';
import Rating from './rating';
import Worktime from './worktime';
import BriefInfo from './briefinfo';

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
		active: false,
		}
	}
	
	// componentDidMount() {
		// this.setState ({
			// active: false,
		// });
	// }
	
	showModal () {
		this.setState ({
			active: true,
		});
	}
	
	hideModal () {
		this.setState ({
			active: false,
		});
	}
		
	render() {
		console.log(this.state.active);
		return (
		<Fragment>
		{this.state.active &&
			<div style={{background: '#eee', padding: 20}}>
				<span style={{float: 'right', width: 10, margin: '0 20px', cursor: 'pointer'}} onClick={this.hideModal}>X</span>
			  <BriefInfo info={this.props.info.poliData} onClickDetail={this.showModal}/>12345
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