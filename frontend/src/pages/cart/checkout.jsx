import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import "./checkout.css";
// import Navbar from "../../components/Navbar"; // Adjust the import path as necessary

const Checkout = () => {
    const { checkout } = useContext(ShopContext);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [purchasedItems, setPurchasedItems] = useState([]);

    // Define the customers object
    const customers = {
        "1234567890": "John Doe",
        "0987654321": "Jane Smith",
        // Add more customers as needed
    };

    const handlePhoneNumberChange = (e) => {
        const enteredPhoneNumber = e.target.value;
        setPhoneNumber(enteredPhoneNumber);
        // Look up the customer's name based on the entered phone number
        const name = customers[enteredPhoneNumber] || "Customer Not Found";
        setCustomerName(name);
    };

    useEffect(() => {
        // Retrieve purchased items from localStorage
        const storedItems = localStorage.getItem('purchasedItems');
        if (storedItems) {
            setPurchasedItems(JSON.parse(storedItems));
            // Optionally, clear the purchased items from localStorage after use
            localStorage.removeItem('purchasedItems');
        }
    }, []); // Empty dependency array means this effect runs once on mount

    const printLocalStorage = () => {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            console.log(`${key}: ${value}`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        printLocalStorage();
        checkout();
        window.location.href="/sales-report"
        // Navigate to the SalesReport page
        // window.location.href = `/sales-report?customerName=${encodeURIComponent(customerName)}`;
        // Here you can process the transaction with the phone number
        // For now, let's just clear the cart
        
        // Show an alert indicating the purchase was successful
        alert("Purchase successful!");
    };

    return (
        <div>
            
            <div className="checkout-form">
                <h2>Checkout</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        required
                    />
                    <p>Customer Name: {customerName}</p>
                    <button type="submit">Checkout</button>
                </form>
                {/* Display purchased items for demonstration purposes */}
                <div>
                    {/* <h3>Purchased Items:</h3> */}
                    <ul>
                        {purchasedItems.map((item, index) => (
                            <li key={index}>{item.name} - Quantity: {item.quantity}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
