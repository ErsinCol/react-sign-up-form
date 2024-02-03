import './App.css'
import {useFormik} from "formik";

function App() {
    const {handleSubmit, handleChange, values} = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordRepeat: "",
            remember: true
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        }
    })
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" id="email" name="email"
                           autoComplete="off" value={values.email} onChange={handleChange}/>

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" id="password" name="password"
                           autoComplete="off" value={values.password} onChange={handleChange}/>

                    <label htmlFor="password-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" id="password-repeat"
                           name="passwordRepeat"
                           autoComplete="off" value={values.passwordRepeat} onChange={handleChange}/>

                    <label>
                        <input type="checkbox" checked={values.remember} onChange={handleChange} name="remember"
                               style={{marginBottom: "1rem"}}/>
                        Remember me
                    </label>

                    <p>By creating an account you agree to our <a href="#" style={{color: "dodgerblue"}}>Terms
                        & Privacy</a>.</p>

                    <div className="clearfix">
                        <button type="button" className="cancel-btn">Cancel</button>
                        <button type="submit" className="signup-btn">Sign Up</button>
                    </div>
                </div>
            </form>


            <pre>
                {JSON.stringify(values, null, 2)}
            </pre>
        </>
    )
}

export default App
