import React, { Component, Fragment } from 'react';

class Metro extends Component {
	render() {

		return (
		<Fragment>
			<p>На метро:</p>
		{this.props.info.map((item, id) => {
			return(
				<ul key={id}>
					<li>Станция метро: {item.title}  - {item.endMin}   мин. пешком.</li>
				</ul>
			)
		})
		}
		</Fragment>
		)
	}
}

export default Metro;