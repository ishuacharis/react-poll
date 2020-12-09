import React from 'react'
import {Field, ErrorMessage} from 'formik';


function FormField({name, ...rest}){
    return(
        <div className="field">
            <Field name={name} className="input" {...rest} />
            <ErrorMessage name = {name} component="div"  className="formError"  />
        </div>
    )
}

export default FormField;