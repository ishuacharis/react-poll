import { useField } from 'formik';
import React from 'react'


function FormField({label,...props}){
    const [field,meta,helpers] = useField(props);

    return(
        <div className="field">
            <input { ...field } {  ...props } className="input" />
            {meta.error && meta.touched && <div className="formError"> {meta.error} </div>}
        </div>
    )
}

export default FormField;