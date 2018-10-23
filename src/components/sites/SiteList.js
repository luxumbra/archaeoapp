import React from 'react';
import SiteSummary from './SiteSummary';

const SiteList = ({ sites }) => {
    return (
        <div className="site-list">
            { sites && sites.map(site => {
                return (
                    <SiteSummary site={site} key={site.id} />
                )
            })}
        </div>
    )
}

export default SiteList;