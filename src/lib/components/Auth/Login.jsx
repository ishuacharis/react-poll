import React , {  useContext} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'

import {handleSubmit} from '../../utils/utils'

import {Formik, Form} from 'formik'
import { loginSchema } from 'lib/ValidationSchema/schema'
import FormField from './FormField'
import AuthContext from 'lib/Context/AuthContext'

function Login() {
  window.hist = useHistory();
  window.locat = useLocation();
  let history = useHistory();
  let location = useLocation();
  let auth = useContext(AuthContext)
  let {from} = location.state || { from: { pathname: "/" } };
  return (
    <div className = "login">
      <Formik
        initialValues= { {email: '', password: ''} }
        validationSchema = {loginSchema}
        onSubmit = { (values, { setSubmitting }) => {
          // const args = {
          //   values: values,
          //   cb: setSubmitting
          // }
          // handleSubmit(args)

          auth.authenticate(() => {
            console.log("authenticating from login")
            history.replace(from)
          })
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


export default Login
