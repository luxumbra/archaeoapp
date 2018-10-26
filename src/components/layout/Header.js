import React from 'react';

const Header = (props) => {
  return (
    <header id='landing' className='masthead d-flex align-items-center justify-content-center'>
      <div className="container intro sr-header">
        {/* <div className="row">
          <div className="col col-8 mx-auto intro"> */}
              {props.children}
          {/* </div>
        </div> */}
      </div>
    </header>
  )
}

export default Header