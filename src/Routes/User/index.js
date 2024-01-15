import React from 'react';
import ModifyTableButton from '../../Components/ModifyTableButton'
import SideBar from '../../Components/SideBar'
import DropDown from '../../Components/DropDown'
import InputField from '../../Components/InputField'
import InputButton from '../../Components/InputButton'
export default function Details() {
    return (
        
        <div>
            <DropDown/>
        <SideBar/>
            <div className="default-main">
        <form action="/" className="default-form">
          <h3>Enter the User details here</h3>
            <InputField type="text" id="username" name="username"  className="default-form-input" placeholder="Enter the username.."/>
            <InputField type="text" id="email" name="email" className="default-form-input" placeholder="Enter the Email.."/>
            
            <InputField type="text" id="password" name="password" className="default-form-input" placeholder="Enter the password"/><br/>
            <InputField type="text" id="role" name="role" className="default-form-input" placeholder="Enter the role"/>
            
            <InputButton type="submit" className="default-form-submit" value="Submit"/>
        </form>
        <div className="table-responsive">
            <table className="table table-dark table-striped w-75 container">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Edit/Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                
            <td>
                <ModifyTableButton/>
            </td>
        </tr>
        <tr>
            
                <td></td>
                <td></td>
                <td></td>
                <td></td>
        <td>
        <ModifyTableButton/>

        </td>
        </tr>
        </tbody>
        </table>
        </div>
    </div>
        </div>
    );
};
