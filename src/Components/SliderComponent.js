import React from 'react'
import Slider from '@material-ui/core/Slider';


export default class SliderComponenet extends React.Component{

	state = {
		clickEvent: {},
		number: ""
	}



	render(){


		return(
			<Slider
			valueLabelDisplay="on"
			value={this.state.value}
			defaultValue={1}
			min={1} max={50}
			onChange={(event, val) => this.setState({clickEvent: event, number: val}, () => this.props.number(this.state.clickEvent, this.state.number))}

			/>

		)
	}
}