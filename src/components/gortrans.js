import React, { Component, Fragment } from 'react';

class Gortrans extends Component {
	render() {
				//console.log('from gortrans ',this.props.info)
		return (
		<Fragment>
			<p>На городском транспорте:</p>
		{this.props.info.map((item, id) => {
			return(
			<ul key={id}>
				<li>Автобус, остановка: {item.title} - {item.endMin} мин. пешком.</li>
			</ul>
			)
		})
		}
		</Fragment>
		)
	}
}

export default Gortrans;