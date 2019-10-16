import React from 'react'
import MapContainer from './Components/MapContainer'
import SliderContainer from './Components/SliderContainer'

export default class Main extends React.Component{

	state = {
		drivers: []
	}


	getNumber = (event, number) => {
		this.handleStateChange(event, number)
	}

	handleStateChange = (event, number) => {
		console.log(event)
		console.log(number)

		return fetch(`https://cors-anywhere.herokuapp.com/https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375&longitude=-0.0964509&count=${number}`, {mode: 'cors'} )
				.then(resp => resp.json())
				.then(data => this.setState({drivers: [data.drivers]}, () => console.log(this.state.drivers)))


	}


	render(){





		return(
			<div class="MainContainer">


				<br></br>
				<br></br>
				<MapContainer listOfDrivers={this.state.drivers}/>

				<br></br>
				<br></br>
				<SliderContainer  getTheNumber={this.getNumber}/>

			</div>
		)
	}



}