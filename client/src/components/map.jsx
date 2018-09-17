import React from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAWaI8cSqRLwvcJtu4hbDZvK0c9b7EnM8Y',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 29.9511, lng: -90.0715}}
  >
    {props.isMarkerShown && <Marker position={{ lat: 29.9511, lng: 90.0715 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)
export default MyMapComponent