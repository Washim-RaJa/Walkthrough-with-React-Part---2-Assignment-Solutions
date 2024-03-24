import './Signup.css'
function Signup({onclick}){
    return (
        <>
            <main>
                <h1>Instagram</h1>
                <p>Sign up to see photos and videos from your friends.</p>
                <form>
                    <input type="text" name="name" placeholder="Enter your Name"/>
                    <input type="text" name="username" placeholder="Enter your Username"/>
                    <input type="email" name="email" placeholder="Enter your Email"/>
                    <input type="password" name="password" placeholder="Enter your Password"/>
                    <input type="text" name="bio" placeholder="Enter your Bio"/>

                    <p>
                        People who use our service may have uploaded your contact information to Instagram.
                        <span> Learn more</span>
                    </p>

                    <p>
                        By signing up, you agree to our <span>Terms</span>,
                        <span>Privacy Policy</span> and
                        <span>Cookies Policy</span>
                    </p>
                    <input type="submit" value="Sign Up" className="signup-btn"/>
                </form>
            </main>
            <footer>
                <p>Have an account? <span onClick={onclick}>Log in</span></p>
            </footer>
        </>
    )
}

export default Signup;