import "./Input.css";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Input({ label, name, type = "text", placeholder, icon, value, onChange, error, }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-group">
      <label>{label}</label>
      <div className={'input-wrapper ${error ? "input-error": ""}'}>
        {icon && <span className="left-icon">{icon}</span>}

        <input
          name={name}
          value={value}
          onChange={onChange}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
        />

        {type === "password" && (
          <span
            className="right-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        )}

        {error && <p className="error-text">{error}</p>}

      </div>
    </div>
  );
}

export default Input;
