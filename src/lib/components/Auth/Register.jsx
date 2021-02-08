import React from 'react'
import {Link} from 'react-router-dom'
import {Formik, Form,  } from 'formik'
import { handleSubmit } from '../../utils/utils'
import { signUpSchema } from '../../ValidationSchema/schema'
import FormField from './FormField'


function Register() {
  const formValues  = {name: '', email: '', phoneNo: '', password: '', confirmPassword: ''};
  return (
    <div className = "register">
      <Formik
        initialValues = { formValues }
        validationSchema = { signUpSchema }
        onSubmit = { (values, {setSubmitting,})  => {
          const args = {
            values: values,
            cb: setSubmitting
          }
          handleSubmit(args)
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
                <button type="submit" className="btn" disabled={!(isValid && dirty) || isSubmitting}> 
                  Create
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )

}


export default Register
// {!isValid  
//   || (Object.keys(touched).length === 0 && touched.constructor === Object) 
//   || isSubmitting}