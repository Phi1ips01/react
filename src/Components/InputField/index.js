import React, { Component } from 'react';
// import PropType from 'prop-types';

export default class InputField extends Component {
  render() {
    return (

        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
          onChange={this.props.onChange}
          id={this.props.id}
          className={this.props.className}
          value={this.props.value}
          required={this.props.required}
          disabled={this.props.disabled}
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