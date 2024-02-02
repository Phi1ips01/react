import React, { Component } from 'react';
import edit from '../../images/edit.png';
import del from '../../images/delete.png';
import Modal from '../Modal';
// import PropType from 'prop-types';
export default class ModifyTableButton extends Component {
  handleDelete = (e) => {
    const row = {
      id:this.props.rowID
    }
   
    if (this.props.deleteAction) {
      console.log("rowID",this.props)
      this.props.deleteAction(row);
    }
  }
  handleEdit = (e) =>{
    const row = {
      id:this.props.rowID
    }
    if (this.props.showOneRow) {
      console.log("rowID",this.props)
      this.props.showOneRow(row)
      return <Modal/>
  }

}
  render() {
    console.log("buttonporps",this.props)
    return (
      <div>
        <button type="button" className="btn btn-primary btn-sm" onClick={this.handleEdit}>
                    <img src={edit} alt="Edit"/>
                </button>
                <button type="button" className="btn btn-danger btn-sm" onClick={this.handleDelete}>
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

