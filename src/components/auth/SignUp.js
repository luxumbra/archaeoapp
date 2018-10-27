import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import withScrollReveal from 'react-scrollreveal'
import scrollReveals from '../behaviour/scripts'
import { compose } from 'redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
    // console.log(this.state);
  }

  render() {

    const { auth, authError } = this.props;
    const { animationContainerReference } = this.props;

    if (auth.uid) return <Redirect to='/dashboard' />

    return (
      <div ref={animationContainerReference}>
      <section className="d-flex align-items-center justify-content-center">
        <div className='container '>
          <div className="row">
            <div className="col col-sm-8 col-lg-4 mx-auto sr-slide-up">
              <h2>Sign Up</h2>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter First Name" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Enter First Name" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
                <div>
                  { authError ? <p>{ authError }</p> : null }
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withScrollReveal(scrollReveals)
)(SignUp)
