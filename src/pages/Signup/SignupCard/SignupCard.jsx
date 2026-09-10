import "./SignupCard.css";
import Input  from "../../../components/Input/Input";
import { use, useState } from "react";


import{
    FiUser,
    FiMail,
    FiPhone,
    FiLock,
} from "react-icons/fi"



function SignupCard() {

  const [formData, setFormData] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:"",
});


const [agreeTerms, setAgreeTerms] = useState(false);

const [errors, setErrors] = useState({});
 
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

const [apiResponse, setApiResponse] = useState(null);

// call form validation on Submit

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateform()) return;

  setLoading(true);

  try {
    const apiData = {
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      }
    );

    const data = await response.json();

    console.log("API Response:", data);
    setApiResponse(data);

  } catch (error) {
    console.log("Error:", error);
  } finally {
    setLoading(false);
  }
};

// formdata saver
  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:value,
    }));

// remove the error for the fields
setErrors((prev) => ({
      ...prev,
      [name]: "",
}));
};


  // error validation
  const validateform = () => {
    const newerrors = {};

    if (! formData.username.trim()){
      newerrors.username = "Username is required";
    }
    if (! formData.email.trim()){
      newerrors.email = "Email is required";
    }else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ){
      newerrors.email ="Enter a invalid email address";
    }
    if (! formData.phone.trim()){
      newerrors.phone = "Phone is required"; 
    }else if (
      !/^\d{10}$/.test(formData.phone)
    ){
      newerrors.phone = "Enter a invalid phone number"
    }
    if (! formData.password.trim()){
      newerrors.password = "password is required";
    }
    else if (formData.password.length < 8){
      newerrors.password = "password must be at least 8 charcters";
    }
    if (formData.confirmPassword !== formData.password){
      newerrors.confirmPassword = "password do not match";
    }
    
    setErrors(newerrors);

    return Object.keys(newerrors).length === 0;


  };

  

  return (
    <form className="signup-card" onSubmit={handleSubmit}>
      <h1>Create your account</h1>
      <p className="subtitle">Get started in few steps</p>

        <Input 
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter your name"
        icon={<FiUser />}
        error={errors.username}
        />

        <Input 
        label="Email id"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@example.com"
        icon={<FiMail />} 
        error={errors.email}
        />

        <Input 
        label="Phone number"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
        icon={<FiPhone />}
        error={errors.phone}
        />
        <Input 
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Create a password"
        icon={<FiLock />}
        error={errors.password}
        
        />
        <Input 
        label="Confirm password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        type="password"
        placeholder="Confirm your password"
        icon={<FiLock />}
        error={errors.confirmPassword}
        
        />
        <div className="terms">
        <input type="checkbox"
        id="terms"
        checked={agreeTerms}
        onChange={(e) => setAgreeTerms(e.target.checked)}
        />

        <label htmlFor="terms">
          I agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span>
        </label>
        </div>

      <button type="submit" className="signup-btn" disabled={!agreeTerms || loading}>
        {loading ? "Creating Accout...": "Sign up"}
      </button>
      {success && (
  <p className="success-message">
    ✅ Account created successfully!
  </p>
)}
    {apiResponse && (
  <div>
    <h3>Registration Successful</h3>
    <p>Name: {apiResponse.username}</p>
    <p>Email: {apiResponse.email}</p>
  </div>
)}
    </form>
    

  );
}
export default SignupCard;
