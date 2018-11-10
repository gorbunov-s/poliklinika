import React, { Component } from 'react';

class BriefInfo extends Component {
	state = {
		showDetail: true,
	}

	render() {
		//console.log('from BriefInfo', this.state.showDetail);
		return (
			<div>
				<p style={{textAlign: 'center', fontWeight: 'bold'}}>
				{this.props.info.gtitle} "{this.props.info.title}"</p>
				<p><b>Адрес:</b> {this.props.info.adres}</p>
				<p><b>Описание:</b> {this.props.info.descr}</p>
				<p onClick={this.clickDetail} style={{color: 'blue', cursor: 'pointer'}}>Подробнее...</p>

			</div>
		)
	}
}

export default BriefInfo;