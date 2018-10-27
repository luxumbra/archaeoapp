import React from 'react'
import SiteSummary from './SiteSummary'

const SiteList = ({ sites }) => {
    return (
        <div className="site-list d-flex flex-wrap flex-row justify-content-around align-items-stretch">
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