import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import ReactTooltip from 'react-tooltip';
import { sites } from '../../data/sites';

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

class AllSitesMap extends Component {

    static defaultProps = {
        center: {
            lat: 54.27,
            lng: -4.36
        },
        zoom: 9
    };

    render() {
        const allSitesArray = sites.map((site,i) => {
            return (
                    <MapMarker
                        data-tip = {sites[i].sitename}
                        data-for = {sites[i].id}
                        key = {sites[i].id}
                        lat = {sites[i].latitude}
                        lng = {sites[i].longitude}
                    />
            );
        });
        // console.log({sites});
        return (
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBoyFkyd-IpqoQS0_4uKGsm3d6mrgn4S1M" }}
                defaultCenter = {this.props.center}
                defaultZoom = {this.props.zoom}
            >
                {allSitesArray}
            </GoogleMapReact>
        );
    }

}

export default AllSitesMap;