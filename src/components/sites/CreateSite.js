import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSite } from '../../store/actions/siteActions'

class CreateSite extends Component {

  state = {
    siteName: '',
    location: '',
    lat: '',
    lng: '',
    description: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createSite(this.state)
  }

  render() {
    return (
      <div className='container'>
        <h2>Add new site</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="siteName">Site Name</label>
            <input type="text" className="form-control" id="siteName" aria-describedby="nameHelp" placeholder="Enter Site Name" onChange={this.handleChange} />
            <small id="nameHelp" className="form-text text-muted">Example: Cashtal yn Ard.</small>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" className="form-control" id="location" placeholder="Enter location" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lat">Latitude</label>
            <input type="text" className="form-control" id="lat" aria-describedby="latHelp" placeholder="Enter Latitude" onChange={this.handleChange} />
            <label htmlFor="lat">Longitude</label>
            <input type="text" className="form-control" id="lng" aria-describedby="lngHelp" placeholder="Enter Longitude" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Site Description</label>
            <textarea id="description" className="form-control" onChange={this.handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSite: (site) => dispatch(createSite(site))
  }
}

export default connect(null, mapDispatchToProps)(CreateSite)