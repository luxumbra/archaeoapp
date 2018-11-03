import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>

//         <Marker onClick={this.onMarkerClick}
//           name={'Current location'} />

//         <InfoWindow onClose={this.onInfoWindowClose}>
//           <div>
//             <h1>{this.state.selectedPlace.name}</h1>
//           </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
// })(MapContainer)


// const markerStyles = {
//       color: 'white',
//       width: '30px',
//       height: '30px',
//       background: '#fff',
//       overflow: 'hidden',
//       padding: '5px',
//       display: 'inline-flex',
//       textAlign: 'center',
//       alignItems: 'center',
//       justifyContent: 'center',
//       borderRadius: '50%',
//       transform: 'translate(-50%, -50%)'
// }

const SiteMap = (props) => {

  const { site, google } = props;
  const defaultProps = {
    center: {
      lat: site.lat,
      lng: site.lng,
    },
    zoom: 12,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
      }
    ]
  }
  // console.log('Google props: ', google);
  // console.log('Site props: ', site);

  const mappedSite = (
      <Marker
        title={site.siteName}
        name={site.siteName}
        key={site.id}
        position={{lat:site.lat, lng: site.lng}}
        // icon={{
        //   url: '../../assets/img/flag.svg',
        //   fillColor: '#fff',
        //   fillOpacity: 1,
        //   strokeColor: '',
        //   strokeWeight: 0,
        //   anchor: new google.maps.Point(32, 32),
        //   scaledSize: new google.maps.Size(64, 64)
        // }}
      />
  )


  return (
    <Map
      google={google}
      zoom={defaultProps.zoom}
      initialCenter={defaultProps.center}
      styles={defaultProps.styles}
    >
      {mappedSite}
    </Map>
  )
}


// const SiteMap = ({ props, site }) => {
//   console.log('Site: ',site);


//   // console.log(defaultProps);
//   console.log('This: ',this);



//   return (

//   );
// }



export default GoogleApiWrapper({
  apiKey: ('AIzaSyBoyFkyd-IpqoQS0_4uKGsm3d6mrgn4S1M')
})(SiteMap);