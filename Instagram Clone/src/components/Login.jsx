import './Login.css'
function Login({onclick}){
    return (
        <>
            <main>
                <h1>Instagram</h1>
                <form>
                    <input type="text" name="username" placeholder="Enter your Username"/>
                    <input type="password" name="password" placeholder="Enter your Password"/>
                    <input type="submit" value="Log In" className="login-btn"/>
                </form>
                <span>Forgot Password?</span>
            </main>
            <footer>
                <p>Don&apos;t have an account? <span onClick={onclick}>Sign Up</span></p>
            </footer>
        </>
    )
}

export default Login;