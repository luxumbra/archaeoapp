import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'
import ScrollReveal from 'scrollreveal'
import scrollReveals from '../behaviour/scripts'
// import { compose } from 'redux'
import { createSite } from '../../store/actions/siteActions'


class CreateSite extends Component {

  state = {
    siteName: '',
    location: '',
    images: null,
    lat: '',
    lng: '',
    description: ''
  }
  handleFileSelect = (event) => {
    console.log(event.target.files);
    // this.setState({
    //   images: event.target.files[0]
    // })
  }
  // fileUploadHandler = () => {
  //   axios.post()
  // }
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

  componentDidMount() {
    // console.log(scrollReveals);
    ScrollReveal().reveal(scrollReveals[4].selector, scrollReveals[4].options);
  }
  render() {
    // console.log('Compo props: ', this.props);

    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />;
    return (
      <section id="create-site" className="d-flex align-items-center justify-content-center">
        <div className="container">
        <div className="row">
            <div className="form-wrapper col col-sm-8 col-lg-6 mx-auto sr-slide-up">
              <h2>Add new site</h2>
              <form onSubmit={this.handleSubmit} className="row">
                <div className="col col-6">
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
                    <label htmlFor="images">Images</label>
                    <input type="file" multiple className="form-control" id="images" onChange={this.handleFileSelect} />
                  </div>
                </div>
                <div className="col col-6">
                  <div className="form-group">
                    <div className="form-group">
                      <label htmlFor="lat">Latitude</label>
                      <input type="text" className="form-control" id="lat" aria-describedby="latHelp" placeholder="Enter Latitude" onChange={this.handleChange} />
                      <label htmlFor="lat">Longitude</label>
                      <input type="text" className="form-control" id="lng" aria-describedby="lngHelp" placeholder="Enter Longitude" onChange={this.handleChange} />
                    </div>
                    <label htmlFor="siteName">Site Name</label>
                    <input type="text" className="form-control" id="siteName" aria-describedby="nameHelp" placeholder="Enter Site Name" onChange={this.handleChange} />
                    <small id="nameHelp" className="form-text text-muted">Example: Cashtal yn Ard.</small>
                  </div>
                </div>
                <div className="col col-8">
                  <div className="form-group">
                    <label htmlFor="description">Site Description</label>
                    <textarea id="description" className="form-control" onChange={this.handleChange}></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
              </form>
          </div>
        </div>

        </div>
      </section>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log('State: ', state);
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createSite: (site) => dispatch(createSite(site))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSite)