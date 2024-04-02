import React from "react";
import "../LoginForm.css";
import { Link } from "react-router-dom"; // Import Link for routing

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate backend logic for authentication
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    // Replace this block with actual backend logic
    if (username === "admin" && password === "admin") {
      // Successful login
      alert("Login successful!"); // Replace with your alert or notification component
      // Redirect or perform any other actions after successful login
      window.location.href = "/shop";
    } else {
      // Failed login
      alert("Invalid username or password"); // Replace with your alert or notification component
    }
  };

  return (
    <section>
      <div className="imgBx">
        <img src="/juice4.jpg" alt="Ceres Fruit Juice" />
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2>Cashier Log In</h2>
          <p className="intro">
            Log in to access cashier dashboard and manage transactions
            efficiently.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="inputBx">
              <span>Username</span>
              <input type="text" name="username" required />
            </div>

            <div className="inputBx">
              <span>Password</span>
              <input type="password" name="password" required />
            </div>

            <div className="inputBx">
              <button type="submit">Log In</button>
            </div>
          </form>

          <div className="registerCustomer">
            <p>
              New Customer? <Link to="/register">Register Customer</Link>
              <br></br>
              <br></br> Cashier Registration?{" "}
              <Link to="/register-cashier">Register Cashier</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
