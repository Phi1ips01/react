import React, { Component } from 'react';
import edit from '../../images/edit.png';
import del from '../../images/delete.png';
// import PropType from 'prop-types';
export default class ModifyTableButton extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary btn-sm">
                    <img src={edit} alt="Edit"/>
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                    <img src={del} alt="Delete"/>
                </button>
        </div>
    );
  }
}
// ButtonElement.Proptype = {
//   className: PropType.string,
//   type: PropType.string,
//   children: PropType.string,
//   placeholder: PropType.string,
//   value: PropType.string,

