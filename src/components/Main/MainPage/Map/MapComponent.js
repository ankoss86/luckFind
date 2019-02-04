import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
    withProps({    
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDurZQBXjtSzKeieXwtFeGe-jhZu-HEGQU&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `100%` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
        withScriptjs,
        withGoogleMap)(props => (

            <GoogleMap defaultZoom={10} defaultCenter={props.center}>      
                <Marker 
                    icon = 'http://www.myiconfinder.com/uploads/iconsets/48-48-a5485b563efc4511e0cd8bd04ad0fe9e.png'
                    position={props.center} 
                />                  
            </GoogleMap>
    ));

  export default MyMapComponent;