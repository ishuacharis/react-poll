import * as Yup from 'yup'

const signUpSchema  = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email('Inavlid Email').required("Required"),
    phoneNo: Yup.string().required("Required"),
    password: Yup.string().required('Required').min(4, 'Too short').max(10, 'Too long'),
    confirmPassword: Yup.string().test('is-password','Password does not match', 
    (value, context) => value === context.parent.password)
})

const loginSchema  = Yup.object().shape({
    email: Yup.string().email('Inavlid Email').required("Required"),
    password: Yup.string().required('Required').min(4, 'Too short').max(10, 'Too long'),
})

export {
    signUpSchema,loginSchema
}