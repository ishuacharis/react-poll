import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Formik, Form,  } from 'formik'
import { handleRegister } from 'lib/routes'
import { signUpSchema } from '../../ValidationSchema/schema'
import FormField from './FormField'
import { connect } from 'react-redux';
import { authenticate } from 'lib/redux/actions/action_creators/auth/auth_async_actions'


function Register({ token, handleRequest }) {
  const formValues  = {name: '', email: '', phoneNo: '', password: '', confirmPassword: ''};
  const history = useHistory();
  return (
    <div className = "register">
      <Formik
        initialValues = { formValues }
        validationSchema = { signUpSchema }
        onSubmit = { async (values,)  => {
          const args = {
            endPoint: "/register",
            method: "POST",
            body: {
              name: values.name,
              email: values.email,
              phone_no: values.phoneNo,
              password: values.password
            },
          }
          await handleRequest(args)
          
          if(token) {
            history.replace("/housemates")
          }
          
        } }
      >
        {/* value: get the value entered in the field
        touched: get touched object of the field */}

        {({isSubmitting, isValid, dirty}) => (
          <Form>
            <div className="field__content">
              <FormField 
                name="name"
                placeholder="Name"
                type="text"
              />
              <FormField 
                name="email"
                placeholder="Email"
                type="email"
              />
              <FormField 
                name="phoneNo"
                placeholder="Phone no"
                type="text"
              />
              <FormField 
                name="password"
                placeholder="Password"
                type="password"
              />

              <FormField 
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
              />
              <div className="link">
                <Link to={{
                  pathname: '/auth',
                  search: '?a=login'
                }} className="link-item">Already have an account?</Link>
              </div>
              <div className="field">    
                {!isSubmitting && <button type="submit" className="btn" disabled={ !(dirty && isValid) || isSubmitting}> 
                  Create
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

const mapStateToProps = (state) => ({
  token: state.auth.token
})

const mapDispatchToProps = (dispatch) => ({
  handleRequest: (value) => dispatch(authenticate(value, handleRegister))
})

export default connect(mapStateToProps,mapDispatchToProps)(Register)