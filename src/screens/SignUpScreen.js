import { useRef, useState } from "react";
import { auth } from "../firebase";
import "../styles/SignUpScreen.css"
import toast from "react-hot-toast";


function SignUpScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [showSignIn, setShowSignIn] = useState(true)

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            toast('Registered successfully ✅...redirecting to profile')
            console.log(authUser);
        }).catch((error) => {
            toast(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            toast('Logged in successfully ✅')
            console.log(authUser);
        }).catch((error) => toast(error.message));
    }


    return (
        <>
        {showSignIn ?
        (        
            <div className="SignUpScreen">
                <form>
                    <h1>Sign In</h1>
                    <input ref={emailRef} placeholder="Email" type="email" />
                    <input ref={passwordRef} placeholder="Password" type="password"/>
                    <button type="submit" onClick={signIn}>Sign In</button>

                    <h4>
                        <span className="SignUpScreen__gray">New to Netflix?  </span>
                        <span className="SignUpScreen_link" onClick={() => setShowSignIn(false)}>
                            Register
                        </span>
                    </h4>
                </form>
            </div>
        ) : (
            <div className="SignUpScreen">
            <form>
            <h1>Register</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password"/>
            <button type="submit" onClick={register}>Register</button>

            <h4>
                <span className="SignUpScreen__gray">Already have an account?  </span>
                <span className="SignUpScreen_link" onClick={() => setShowSignIn(true)}>
                    Sign in
                </span>
            </h4>
        </form>
        </div>
        )
        }
        </>
    )
}

export default SignUpScreen
