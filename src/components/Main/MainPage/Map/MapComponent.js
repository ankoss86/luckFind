import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
    withProps({    
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDurZQBXjtSzKeieXwtFeGe-jhZu-HEGQU&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%`, borderRadius: '10px' }} />,
      containerElement: <div style={{ height: `100%`, borderRadius: '10px' }} />,
      mapElement: <div style={{ height: `100%`, borderRadius: '10px' }} />
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
//   AIzaSyC8fNAn2hv0crW8DcHSxEqzBQsRZn7D3z0
// AIzaSyDurZQBXjtSzKeieXwtFeGe-jhZu-HEGQU