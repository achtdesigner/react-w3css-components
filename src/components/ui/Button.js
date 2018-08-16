import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    return (
      <Link
        to={this.props.linkTo}
        className="w3-button w3-black w3-padding-large w3-large w3-margin-top"
      >
        {this.props.text}
      </Link>
    );
  }
}

Button.defaultProps = {
  text: 'Submit',
  linkTo: '/'
};

Button.propTypes = {
  text: PropTypes.string,
  linkTo: PropTypes.string
};

export default Button;
