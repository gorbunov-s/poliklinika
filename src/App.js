import React, { Component, Fragment } from 'react';
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
					id: el.uid,
					gtitle: el.hospitalType.title,
					title: el.title,
					descr: el.description,
					adres: el.address,
				};
				return el;
			})
		})
	}

	setCurrentItem(uid) {
		let i = 0;
		for ( i in data) {
			if (data[i].uid === uid){
				this.setState({
					currentItem: data[i],
					showModal: true,
				})
			}
		}
	};
		
	handleClickClose () {
		this.setState({
			showModal: false,
			currentItem: null,
		})
	}
		
  render() {
		return (
			<Fragment>
			{this.state.pageData.map((item, id) => {
				return(
					<div style={{width: 600, margin: 'auto', border: 'thin solid #ddd', padding: 10 }} key={id}>
						<BriefInfo 
							info={item.poliData}
							onClickDetail={(uid) => this.setCurrentItem(uid)}
						/>
					</div>
				)
			})
			}
			{this.state.showModal &&
				<Modal 
					info={this.state.currentItem}
					onClickClose={() => this.handleClickClose()}
				/>
			}
			</Fragment>
    );
  }
}

export default App;
