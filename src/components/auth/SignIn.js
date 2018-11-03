import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScrollReveal from 'scrollreveal'
import scrollReveals from '../behaviour/scripts'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {

  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('SignIn: ', this.state);

    this.props.signIn(this.state);
  }
  componentDidMount() {
    ScrollReveal().reveal(scrollReveals[4].selector, scrollReveals[4].options);
    ScrollReveal().reveal(scrollReveals[2].selector, scrollReveals[2].options);
  }
  render() {
    const { authError, auth } = this.props

    if (auth.uid) {
      // this.props.destroyRevealAnimation();
      return <Redirect to='/dashboard' />;
    }
    return (
      <section className="d-flex align-items-center justify-content-center">
          <div className='container '>
            <div className="row">
              <div className="form-wrapper ol col-sm-8 col-lg-4 mx-auto sr-slide-up sr-fade-slow">
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
                  </div>
                  <button type="submit" className="btn btn-primary">Sign In</button>
                  <div>
                    {authError ? <p>{authError}</p> : null}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

    )

  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}
export default compose(
  // withScrollReveal(scrollReveals),
  connect(mapStateToProps, mapDispatchToProps),
  )(SignIn)
