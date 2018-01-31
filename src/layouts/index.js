import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Quiet Corner"
      meta={[
        { name: 'description', content: 'In an age of noisy browsing, Quiet Corner exists to preserve the true art of storytelling.' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
    <link rel="stylesheet" href="https://use.typekit.net/lxj0qbn.css" />
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,900" rel="stylesheet" />
    </Helmet>
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
