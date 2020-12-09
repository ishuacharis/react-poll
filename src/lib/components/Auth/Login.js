import React , { useState} from 'react'
import {Link} from 'react-router-dom'

import {handleSubmit} from '../../utils/utils'

import {Formik, Form} from 'formik'
import { loginSchema } from 'lib/ValidationSchema/schema'
import FormField from './FormField'

function Login() {
  

  return (
    <div className = "login">
      <Formik
        initialValues= { {email: '', password: ''} }
        validationSchema = {loginSchema}
        onSubmit = { (values, { setSubmitting }) => {
          const args = {
            values: values,
            cb: setSubmitting
          }
          handleSubmit(args)
        }}
      >

      {({isSubmitting,isValid, dirty}) => (
        <Form>
          <div className="field__content">
          {isSubmitting}
            <FormField 
              name="email"
              placeholder="Email"
              type="email"
            />
            <FormField 
              name="password"
              placeholder="Password"
              type="password"
            />
            <div className="link">
              <Link to={{
                pathname: '/auth',
                search: '?a=register'
              }} className="link-item">Don't have an account?</Link>
            </div>
            <div className="field">    
              <button type="submit" className="btn" disabled={ !(dirty && isValid) || isSubmitting}> 
                Log in
              </button>
            </div>
          </div>
        </Form>
      )}

      </Formik>
    </div>
  )
}


export default Login
