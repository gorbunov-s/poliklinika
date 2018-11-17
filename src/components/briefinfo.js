import React, { Component } from 'react';

class BriefInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMore: true,
		}
	}

	moreDetail = () => {
		this.props.onClickDetail(this.props.info.id);
	}
	
	render() {
		return (
			<div style={{position: 'relative'}}>
				<p style={{textAlign: 'center', fontWeight: 'bold'}}>
				{this.props.info.gtitle} "{this.props.info.title}"</p>
				<p><b>Адрес:</b> {this.props.info.adres}</p>
				<p><b>Описание:</b> {this.props.info.descr}</p>
				<p onClick={this.moreDetail} style={{color: 'blue', cursor: 'pointer'}}>Подробнее...</p>
			</div>
		)
	}
}

export default BriefInfo;