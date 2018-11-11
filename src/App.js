import React, { Component, Fragment } from 'react';
//import toHtml from 'string-to-html';
import data from './polidata';
import BriefInfo from './components/briefinfo';
import Modal from './components/modal';

class App extends Component {
	state = {
		pageData: [],
		showModal: false,
		currentItem: null,
		}
	
	componentDidMount () {
		this.setState({
			pageData: data.map((el, id) => {
				el.poliData = {
					gtitle: el.hospitalType.title,
					title: el.title,
					descr: el.description,
					adres: el.address,
				};
				el.transportData = {
					metro: el.subwayStations,
					trans: el.transportStations,
				};
				return el;
			})
		})
	}

	setCurrentItem(item) {
		this.setState({
			currentItem: {item},
		})
	} 
	
  render() {

		return (
			<Fragment>
			{this.state.pageData.map((item, id) => {
				return(
				<div style={{width: 600, margin: 'auto'}} key={id}>
					<div style={{border: 'thin solid #ddd', padding: 10 }}>
						<BriefInfo 
							info={item.poliData}
							onClickDetail={(item) => this.setCurrentItem(item)}
						/>
				</div>
				</div>)
			})}
				<div>
						<Modal 
							info={item}

						/>
					</div>
			</Fragment>
    );
  }
}

export default App;
