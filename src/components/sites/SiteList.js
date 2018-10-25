import React from 'react'
import SiteSummary from './SiteSummary'

const SiteList = ({ sites }) => {
    return (
        <div className="site-list">
            { sites && sites.map(site => {
                return (
                    // <link to={'/site/' + site.id} key={site.id}>
                    <SiteSummary site={site} key={site.id} />
                    // </link>
                )
            })}
        </div>
    )
}

export default SiteList;