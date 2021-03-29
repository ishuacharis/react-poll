import React from 'react'
import {  Formik, Form, Field  } from 'formik';
const formValues = {name: '', email: '', phone_no: ''};

function ProfileContainer() {
    return (
        
        <div className="profile">
            <div className="profile-content">
                <div className="profile-head">
                    <div className="profile-pic">
                        <img src={require('lib/assets/boy.jpg')} alt="profile-picture" />
                        <span>
                            <i className='bx bx-camera'></i>
                        </span>
                    </div>
                </div>
                <div className="profile-body">
                    <div>
                        <Formik
                            initialValues={formValues}
                            onSubmit = { async (values) => {
                                console.log(values)
                            } }
                        >

                            { ({  isSubmitting }) => (
                                <Form>
                                    <div className="field__content">

                                        <div className="field">
                                            <Field name="name" type="text" className="input thin-border" as="input" />
                                        </div>
                                        <div className="field">
                                            <Field name="email" type="text" className="input thin-border" as="input" />
                                        </div>
                                        <div className="field">
                                            <Field name="phone_no" type="text" className="input thin-border" as="input" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        {!isSubmitting && <button type="submit" className="btn" >Save</button>}
                                        {isSubmitting && <div  className="loading"></div>}
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileContainer
