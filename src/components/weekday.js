import React, { Component, Fragment } from 'react';

class WeekDay extends Component {
	render() {

		return (
		<Fragment>
			<p>{this.props.info.days.map((item, id) => {
				return ( 
				<span key={id}>{item.title}<br/></span>
				)
			})}   
			{this.props.info.startTime &&
				<span>Часы работы: 	{this.props.info.startTime} - {this.props.info.endTime}</span>
			}
			{!this.props.info.startTime &&
			<span>Выходной</span>	
			}
			</p>
		</Fragment>
		)
	}
}

export default WeekDay;