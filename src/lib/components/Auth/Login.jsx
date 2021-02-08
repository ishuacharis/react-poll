import React , {useEffect,  useContext} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'

import {handleSubmit, login} from '../../utils/utils'
import { connect } from 'react-redux';

import {Formik, Form,} from 'formik'
import { loginSchema } from 'lib/ValidationSchema/schema'
import FormField from './FormField'
import AuthContext from 'lib/Context/AuthContext'
import { setToken, setUser } from 'lib/redux/actions/action_creators/auth';
import {store} from "../../redux/store";

function Login({ token,counter, updateToken, updateUser }) {
  
  window.hist = useHistory();
  window.locat = useLocation();
  let history = useHistory();
  let location = useLocation();
  let auth = useContext(AuthContext)
  let {from} = location.state || { from: { pathname: "/" } };
  const formValues = {email: '', password: ''};
   
  return (

    <div className = "login">
      <Formik
        initialValues= { formValues }
        validationSchema = {loginSchema}
        onSubmit = { async (values, { setSubmitting }) => {
          const args = {
            endPoint: "/login",
            method: "POST",
            body: {
              email: values.email,
              password: values.password
            },
          }
          try {
            const response  = await login(args);
            const user  = response['response']['user'];
            const token  = response['response']['token'];
            localStorage.setItem('USER', JSON.stringify(user));
            localStorage.setItem('TOKEN', JSON.stringify(token));
            updateUser(user)
            updateToken(token)
            history.push("/housemates")
            // auth.authenticate(() => {
            //   localStorage.setItem('USER', JSON.stringify(user));
            //   localStorage.setItem('TOKEN', JSON.stringify(token));
            //   setToken(user);
            //   setUser(token);
            //   history.push("/housemates")
            // })
          } catch (e) {
            console.log(`error ${e.message}`)
          }
          
         
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

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateUser: (value) => dispatch(setUser(value)),
  updateToken: (value) => dispatch(setToken(value)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)
