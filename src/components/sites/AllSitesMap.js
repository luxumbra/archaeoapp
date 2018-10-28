import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import ReactTooltip from 'react-tooltip';


const MapMarker = ({text}) => {

    return (
        <div style={{
            color: 'white',
            width: '10px',
            height: '10px',
            background: 'rgba(0,0,0,0.5)',
            overflow: 'hidden',
            padding: '5px',
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            {text}
        </div>
    );
}

const AllSitesMap = (props) => {
    console.log(props.sites);

    const { sites, google } = props;
    const defaultProps = {
        center: {
            lat: 54.27,
            lng: -4.36
        },
        zoom: 9,
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

    const allMappedSites = sites && sites.map(site => {
        return (
            <Marker
              title={site.siteName}
              name={site.siteName}
              key={site.id}
              position={{ lat: site.lat, lng: site.lng }}
            />
        )
    })

    return (

      <Map
        google={google}
        zoom={defaultProps.zoom}
        initialCenter={defaultProps.center}
        styles={defaultProps.styles}
      >
        {allMappedSites}
      </Map>
    );
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBoyFkyd-IpqoQS0_4uKGsm3d6mrgn4S1M')
})(AllSitesMap);