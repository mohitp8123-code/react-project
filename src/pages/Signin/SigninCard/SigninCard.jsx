import React, { useState } from "react";
import "./SigninCard.css";
import "../../../components/Input/Input";
import Input from "../../../components/Input/Input";
import { Link } from "react-router-dom";

import { FiMail, FiLock } from "react-icons/fi";

function SigninCard() {
  const [formData, setformData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState({});
  const [errors, setErrors] = useState({});
  const[success] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // remove the error for the fields
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <form className="signin-card">
      <h1>Welcome back</h1>
      <p>Glad to see you again! Please sign in to your account</p>

      <Input
        label="Email address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@exampler.com"
        icon={<FiMail />}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Create a password"
        icon={<FiLock />}
      />
      <div className="remind-pass">
        <div className="terms">
          <input
            type="Checkbox"
            id="terms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          <label htmlFor="terms">Remember me</label>
        </div>
        Forget Password
      </div>
      <button
        type="submit"
        className="submit-btn"
        disabled={!agreeTerms || loading || Success}
      >
        {loading
          ? "Sign In"
          : Success
            ? "Signing in..."
            : "Signin Successfully"}
      </button>
      <div className="signupifnot">
      <p>
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </p>
      </div>
    </form>
  );
}
export default SigninCard;
