import './App.css'

function App() {
  return (
    <>
      <form>
          <div className="container">
              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
              <hr/>

              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" id="email" name="email" required autoComplete="off"/>

              <label htmlFor="password"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" id="password" name="password" required autoComplete="off"/>

              <label htmlFor="password-repeat"><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" id="password-repeat" name="password-repeat"
                     required autoComplete="off"/>

              <label>
                  <input type="checkbox" checked name="remember" style={{marginBottom: "1rem"}}/>
                  Remember me
              </label>

              <p>By creating an account you agree to our <a href="#" style={{color: "dodgerblue"}}>Terms & Privacy</a>.</p>

              <div className="clearfix">
                  <button type="button" className="cancel-btn">Cancel</button>
                  <button type="submit" className="signup-btn">Sign Up</button>
              </div>
          </div>
      </form>
    </>
  )
}

export default App
