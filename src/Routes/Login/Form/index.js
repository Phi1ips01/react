import React, { Component } from 'react';

import ButtonElement from '../../../Components/ButtonElement';
import InputField from '../../../Components/InputField';

import style from './style.module.scss';

export default class Form extends Component {
  render() {
    const { email, password, loading, onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <ul className={style.formsBlock__list}>
          <li>
            {/* <InputField
              htmlForName='email'
              placeholderLabel='Email'
              type='text'
              onChange={inputChange}
              value={email.value}
              error={email.error}
            /> */}
 <InputField
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              required          
            />
          </li>
          <li>
            <InputField
              id="password"
              name='password'
              placeholder='Password'
              type='password'
              required
            />
          </li>
          <li>
            <ButtonElement
              disable={
                (password.error || email.error) ||
                (!email.value || !password.value) ||
                loading
              }
              children={loading ? 'Please wait' : 'Login'}
            />
          </li>
        </ul>
      </form>
    );
  }
}