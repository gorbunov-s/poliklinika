import React, { Component, Fragment } from 'react';
import WeekDay from './weekday';

class Worktime extends Component {
	render() {
		//console.log('from worktime ',this.props.info)
		return (
		<Fragment>
		<p><b>Часы работы:</b></p>
		{this.props.info.map((item, id) => {
			return(
			<div key={id}>
				<ul>
					<li>
						<WeekDay info={item}/>
					</li>
				</ul>
			</div>
			)
		})
		}
		</Fragment>
		)
	}
}

export default Worktime;