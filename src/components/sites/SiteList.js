import React from 'react';
import Site from './Site';

const SiteList = ({ sites }) => {
    // console.log({sites});
    const siteArray = sites.map((site, i) => {
        return <Site
            key={sites[i].id}
            id={sites[i].id}
            sitename={sites[i].sitename}
            location={sites[i].location}
            description={sites[i].description}
            />
    });
    return (
        <div className="site-list">
            {siteArray}
        </div>
    );
}

export default SiteList;