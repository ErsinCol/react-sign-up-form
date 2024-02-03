import "./styles.css"
import {useFormik} from "formik";
import SignupSchema from "./validations.js";

function SignUpForm() {
    const {handleSubmit, handleChange, values, errors, touched, handleBlur, resetForm} = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordRepeat: "",
            remember: true
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
            resetForm();
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>

            <div className="form-field">
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" id="email" name="email"
                       autoComplete="off" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                {
                    touched.email && errors.email && <small className="error-message">{errors.email}</small>
                }
            </div>

            <div className="form-field">
                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" id="password" name="password"
                       autoComplete="off" value={values.password} onChange={handleChange} onBlur={handleBlur}
                />
                {
                    touched.password && errors.password && <small className="error-message">{errors.password}</small>
                }
            </div>

            <div className="form-field">
                <label htmlFor="password-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" id="password-repeat"
                       name="passwordRepeat"
                       autoComplete="off" value={values.passwordRepeat} onChange={handleChange} onBlur={handleBlur}
                />
                {
                    touched.passwordRepeat && errors.passwordRepeat && <small className="error-message">{errors.passwordRepeat}</small>
                }
            </div>

            <label>
                <input type="checkbox" checked={values.remember} onChange={handleChange} name="remember"/>
                <span>Remember me</span>
            </label>

            <p>By creating an account you agree to our <a href="#" style={{color: "dodgerblue"}}>Terms
                & Privacy</a>.</p>

            <button type="submit" className="btn">Sign Up</button>
        </form>
    )
}

export default SignUpForm