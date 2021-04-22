import * as Yup from 'yup'

export const signUpSchema  = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().email('Inavlid email').required().label("Email"),
    phoneNo: Yup.string().required().label('Phone'),
    password: Yup.string().required().min(4, 'Too short').max(10, 'Too long').label("Password"),
    confirmPassword: Yup.string().test('is-password','Password does not match', 
    (value, context) => value === context.parent.password)
})

export const loginSchema  = Yup.object().shape({
    email: Yup.string().email("Inavlid email").required().label("Email"),
    password: Yup.string().required().min(4, 'Too short').max(10, 'Too long').label('Password'),
})

export const loginFormValues = {email: '', password: ''};
export const registerFormValues  = {name: '', email: '', phoneNo: '', password: '', confirmPassword: ''};