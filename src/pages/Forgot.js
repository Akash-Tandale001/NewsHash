import React, { useRef, useState } from "react";
import "./login.css";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const Forgot = () => {
    const emailRef = useRef()

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { resetPassword } = useAuth();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    
    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your Email for futher to set Password ")
      
    } catch {
        setError("Failed to Reset Password");
    }
    setLoading(false);
  };

  return (
    <div className="body">
      <div className="main">
        <div class="login">
          <form onSubmit={handleSubmitLogin}>
            {error && <div className="alert danger">{error}</div>}
            {message && <div className="alert success ">{message}</div>}
            <label for="chk" aria-hidden="true">
              Forgot Password
            </label>
            <input
              className="boxinput"
              type="email"
              name="email"
              ref={emailRef}
              required
            />            
            <div className="text-center">
              <Link to="/login">Login</Link>
            </div>
            <button disabled={loading} className="loginbutton" type="submit">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
