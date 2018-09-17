import React from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA6drgghedMQixurnycyOqoO45qfyNiDzM",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  return( <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 29.9511, lng: -90.0715}}
  >
    {props.props[0].map(element => {
      console.log(element);
      return <Marker position={element} />
    })}
  </GoogleMap>
 )
 }
)
export default MyMapComponent