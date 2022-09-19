import {useEffect, useState, useRef} from "react";
import {LOGIN, SIGN_UP} from "./SiteNavigation/Nav";
import SignUp from "./SignUp";
import useClickOutside from "../hooks/useClickOutside";


export default function({setIsModalOpen, modalType, setModalType}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const containerRef = useRef(null);

    useClickOutside(containerRef, () => setIsModalOpen(false));

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#login input[type='text']").focus();
        }, 1);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST", headers: {"Content-type": "application/json"}, body: JSON.stringify({email, password}),
        };
        let response = await fetch("/data/login", requestOptions);
        if (response.ok) {
            setIsModalOpen(false);
        } else {
            setError("Invalid username or password");
        }
    };

    if (modalType === LOGIN) {
        return (<div className="login-container">
            <form
                onSubmit={handleSubmit}
                className="login-form"
                id="login"
                ref={containerRef}
            >
                {error && <span className="login-form__login-error">{error}</span>}
                <button
                    className="login-form__close-btn"
                    onClick={() => setIsModalOpen(false)}
                >
                    x
                </button>
                <label>Email</label>
                <input
                    className="custom-input"
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    className="custom-input"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="custom-button">Login</button>
                <span className="login-form__sign-up">
            Not a member?
            <button onClick={() => setModalType(SIGN_UP)}>Sign up</button>
          </span>
            </form>
        </div>);
    }
    return (<SignUp
        setIsModalOpen={setIsModalOpen}
        setModalType={setModalType}
        ref={containerRef}
    />);
}

