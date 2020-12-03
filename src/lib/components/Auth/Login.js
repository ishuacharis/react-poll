import React , { useState} from 'react'
import {Link} from 'react-router-dom'

import {handleValidate, handleSubmit} from '../../utils/utils'

import {Formik, Form, Field, ErrorMessage} from 'formik'

function Login() {
  

  return (
    <div className = "auth__container">
      <div className = "auth__content">
        <div className="auth__socials"></div>
        <div className="divider">
          <span className="line left"></span>
          <span className="or">OR</span>
          <span className="line right"></span>
        </div>

        <Formik

          initialValues= { {email: '', password: ''} }
          validate = {handleValidate}
          onSubmit = { (values, { setSubmitting }) => {
            const args = {
              values: values,
              cb: setSubmitting
            }
            handleSubmit(args)
          }}
        >

        {({isSubmitting}) => (
          <Form>
            <div className="field__content">
            {isSubmitting}
              <div className="field">
                <Field type="email" name="email" className="input" placeholder="Email" />
                <ErrorMessage name = "email" component="div" />
              </div>
              <div className="field">  
                <Field type="password" name="password" className="input" placeholder="Password" />
              </div>
              <div className="link">
                <Link to={{
                  pathname: '/auth',
                  search: '?a=login'
                }} className="link-item">Already have an account?</Link>
              </div>
              <div className="field">    
                <button type="submit" className="btn" disabled={isSubmitting}> 
                  Create
                </button>
              </div>
            </div>
          </Form>
        )}

        </Formik>
        
      </div>
    </div>
  )
}


export default Login
