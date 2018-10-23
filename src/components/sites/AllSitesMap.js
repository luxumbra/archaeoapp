import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
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

const AllSitesMap = ({sites}) => {

    const defaultProps = {
        center: {
            lat: 54.27,
            lng: -4.36
        },
        zoom: 9
    }

    const allMappedSites = sites && sites.map(site => {
        return (
            <MapMarker
                data-tip={site.siteName}
                data-for={site.id}
                key={site.id}
                lat={site.lat}
                lng={site.lng}
            />
        )
    })

    return (

        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBoyFkyd-IpqoQS0_4uKGsm3d6mrgn4S1M" }}
            defaultCenter = {defaultProps.center}
            defaultZoom = {defaultProps.zoom}
        >
            {allMappedSites}
        </GoogleMapReact>
    );
}

export default AllSitesMap;