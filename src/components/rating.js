import React, { Component, Fragment } from 'react';

class Rating extends Component {
	render() {
		console.log('from rating ',this.props.info)
		return (
			<Fragment>
			<strong>Рейтинг</strong>
				<ul>
					<li>Финансовая доступность : {this.props.info.financialAccessibility}</li>
					<li>Общий сервис : {this.props.info.overallService}</li>
					<li>Общее лечение : {this.props.info.overallTreatment}</li>
					<li>Качество обслуживания : {this.props.info.serviceQuality}</li>
					<li>Квалификация персонала : {this.props.info.staffQualification}</li>
					<li>Техническая оснащённость : {this.props.info.technicalEquipment}</li>
					<li>Транспортная доступность : {this.props.info.transportAccessibility}</li>
					<li>Лечебная доступность : {this.props.info.treatmentAccessibility}</li>
				</ul>	
			</Fragment>
		)
	}
}

export default Rating;