import * as Yup from 'yup';

const SignupSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required("Email is required"),
    password: Yup.string().min(8, 'Password is should be 8 chars minimum.').required("Password is required"),
    passwordRepeat: Yup.string().oneOf([Yup.ref('password'), null], "Password must match").required("Password repeat is required"),
    remember: Yup.boolean(),
})

export default SignupSchema