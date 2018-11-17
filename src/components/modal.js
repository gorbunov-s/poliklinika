import React, { Component, Fragment } from 'react';
import Transport from './transport';
import Rating from './rating';
import Worktime from './worktime';


class Modal extends Component {


	hideModal = () => {
		this.props.onClickClose();
	}
		
	render() {
		const information = this.props.info
		return (
		<Fragment>
			<div style={{background: '#eee', padding: 20, position: 'absolute', top: 0}}>
				<span style={{float: 'right', width: 10, margin: '0 20px', cursor: 'pointer'}} onClick={this.hideModal}>X</span>
			  <p style={{textAlign: 'center', fontWeight: 'bold'}}>
				{information.hospitalType.title} "{this.props.info.title}"</p>
				<p><b>Адрес:</b> {information.address}</p>
				<p><b>Описание:</b> {information.description}</p>
				<Transport info={information} />
				<Rating info={information.rating} />
				<Worktime info={information.openingHours} />
			</div>
		</Fragment>		
		)
	}
}

export default Modal;