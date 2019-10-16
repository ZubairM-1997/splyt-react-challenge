import React from 'react'
import GMap from './GMap'

export default class MapContainer extends React.Component{
	render(){
		return(
			<GMap drivers={this.props.listOfDrivers}/>

		)
	}
}