import React, { Component } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'


export default class GMap extends Component{

	constructor(props){
		super(props)
		this.state = {
			driverObjs: [[]]
		}
	}

	componentDidUpdate(prevProps, prevState){
		if (prevProps !== this.props) {
			this.setState({
				driverObjs: this.props.drivers
			})

		}

	}


	render(){
		const GoogleMaps = withScriptjs(withGoogleMap(props => (
			<GoogleMap
				defaultCenter = {{lat: 51.5049375, lng: -0.0964509}}
				defaultZoom = {15}

			>

			{
				this.state.driverObjs[0].map(driver => <Marker position={{lat: driver.location.latitude, lng: driver.location.longitude}} draggable={false} />)

			}




			</GoogleMap>
		)));

		return(
						<div className="googleMaps">
							<GoogleMaps
								isMarkerShown
								googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDXJow1kwlR8FoDR98HgVC7Q4ok8ZXaujM&callback=initMap"
								loadingElement={<div style={{ height: `100%` }} />}
								containerElement={<div style={{ height: `450px`}} />}
								mapElement={<div style={{ height: `100%` }} />}
							/>
						</div>

		)
	}
}