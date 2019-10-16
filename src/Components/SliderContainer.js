import React from 'react'
import SliderComponent from './SliderComponent'


export default class SliderContainer extends React.Component{

	render(){
		return(
			<SliderComponent  number={this.props.getTheNumber}/>
		)
	}
}