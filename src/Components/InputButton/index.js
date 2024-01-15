import React, { Component } from 'react';
// import PropType from 'prop-types';

export default class InputButton extends Component {
  render() {
    return (

        <input
          type="submit"
          value={this.props.value}
          className={this.props.className}
          onChange={this.props.onChange}
        />
    )
  }
}
// InputField.Prototype = {
//   className: PropType.string,
//   type: PropType.string,
//   placeholder: PropType.string,
//   value: PropType.string,
// };