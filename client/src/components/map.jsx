import React from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA6drgghedMQixurnycyOqoO45qfyNiDzM',
    loadingElement: <div style={{height: 100%}} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  console.log(props.props);
 return( <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 29.977543, lng: -90.075816}}
  >

    {props.props[0].map(({lat,lng}) => {
      console.log(lat, lng);
      return <Marker position={{lat: lat, lng: lng}} />
    })}
  </GoogleMap>
  )
  }
)
export default MyMapComponent