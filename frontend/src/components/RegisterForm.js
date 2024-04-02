import React, { useState } from "react";
import "../RegisterForm.css";

function RegisterForm() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  // State to manage loading state
  const [loading, setLoading] = useState(false);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Set loading state to true
    setLoading(true);
    // Simulate registration process
    await registerUser(formData);
    // Set loading state to false
    setLoading(false);
    // Show alert dialog
    alert('Registration successful! Redirecting to login page...');
    // Redirect to login page after a brief delay
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000); // 1000 milliseconds (1 second) delay
  };

  // Function to simulate user registration (replace with actual backend logic)
  const registerUser = async (userData) => {
    // Simulate asynchronous operation (e.g., sending data to backend)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate 1 second delay
  };

  return (
    <div className="container">
      <h2>Welcome to Ceres Juice Bar</h2>
      <h3>Register user details</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        
        <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
      </form>
    </div>
  );
}

export default RegisterForm;
