import React from 'react'

import {Link, useHistory, useLocation} from 'react-router-dom'

import {  authenticate } from "../../redux/actions/action_creators/auth/auth_async_actions"
import { connect } from 'react-redux';

import {Formik, Form,} from 'formik'
import { loginSchema , loginFormValues} from 'lib/ValidationSchema/schema'
import FormField from './FormField'
import { handleLogin } from 'lib/routes';



function Login({ token, handleRequest}) {

  window.hist = useHistory();
  window.locat = useLocation();
  let history = useHistory();
  let location = useLocation();
 
  let {from} = location.state || { from: { pathname: "/" } };
  
   
  return (

    <div className = "login">
      <Formik
        initialValues= { loginFormValues }
        validationSchema = {loginSchema}
        onSubmit = { async (values,) => {
          
          const args = {
            endPoint: "/login",
            method: "POST",
            body: {
              email: values.email,
              password: values.password
            },
          }
          await handleRequest(args)
          
          if(token) {
            history.replace("/housemates")
          }
        }}
      >

      {( {isSubmitting,isValid, dirty} ) => (
        <Form>
          <div className="field__content">
            <FormField 
              name="email"
              placeholder="Email"
              type="email"
              label="Email"
            />
            <FormField 
              name="password"
              placeholder="Password"
              type="password"
              label="Password"
            />
            <div className="link">
              <Link to={{
                pathname: '/auth',
                search: '?a=register'
              }} className="link-item">Don't have an account?</Link>
            </div>
            <div className="field">    
              {!isSubmitting && <button type="submit" className="btn" disabled={ !(dirty && isValid) || isSubmitting}> 
                Log in 
              </button>}
              {isSubmitting && <div className="loading"></div>}
            </div>
          </div>
        </Form>
      )}

      </Formik>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    token: state.auth.token
  }
}
const mapDispatchToProps = (dispatch) => ({
  handleRequest: (value) => dispatch(authenticate(value, handleLogin)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)
