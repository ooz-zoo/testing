import React, { useEffect, useState } from 'react';
import "./salesreport.css";
import Navbar from '../../components/Navbar';


const SalesReport = () => {
    const [purchasedItems, setPurchasedItems] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem('purchasedItems');
        if (storedItems) {
            // Parse the stored items as JSON
            const parsedItems = JSON.parse(storedItems);
            // Update the state with the parsed items
            setPurchasedItems(parsedItems);
        }
    }, []);

    return (
        <div>
            <Navbar/>    
            <div className="sales-report">
                <h2 className='sales-report-title'>Sales Report</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Purchase Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchasedItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.productName}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
  

export default SalesReport;



// import React, { useEffect, useState } from 'react';

// const SalesReport = () => {
//     const [purchasedItems, setPurchasedItems] = useState([]);

//     useEffect(() => {
//         const storedItems = localStorage.getItem('purchasedItems');
//         if (storedItems) {
//             // Parse the stored items as JSON
//             const parsedItems = JSON.parse(storedItems);
//             // Update the state with the parsed items
//             setPurchasedItems(parsedItems);
//         }
//     }, []);

//     return (
//         <div className="sales-report">
//             <h2>Sales Report</h2>
//             <ul>
//                 {purchasedItems.map((item, index) => (
//                     <li key={index}>
//                         {item.productName} - Quantity: {item.quantity} - Price: ${item.price}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SalesReport;

// import React, { useEffect, useState } from 'react';
// import './salesreport.css'; // Import the CSS file

// const SalesReport = () => {
//     const [purchasedItems, setPurchasedItems] = useState([]);
//     const [customerName, setCustomerName] = useState('');

//     //Retrieve the customer name from the URL query parameters
//     useEffect(() => {
//         const queryParams = new URLSearchParams(window.location.search);
//         const name = queryParams.get('customerName') || 'Unknown Customer';
//         setCustomerName(name);
//     }, []);

//     // useEffect(() => {
//     //     const storedItems = localStorage.getItem('purchasedItems');
//     //     if (storedItems) {
//     //         const parsedItems = JSON.parse(storedItems);
//     //         setPurchasedItems(prevItems => {
//     //             if (prevItems.length > 0) {
//     //                 return [...prevItems, ...parsedItems];
//     //             } else {
//     //                 return parsedItems;
//     //             }
//     //         });
//     //         // Clear the purchased items from local storage after use
//     //         localStorage.removeItem('purchasedItems');
//     //     }
//     // }, []);

//     useEffect(() => {
//         const storedItems = localStorage.getItem('purchasedItems');
//         if (storedItems) {
//             const parsedItems = JSON.parse(storedItems);
//             // Append new items to the existing ones
//             setPurchasedItems(prevItems => [...prevItems, ...parsedItems]);
//             // Clear the purchased items from local storage after use
//             localStorage.removeItem('purchasedItems');
//         }
//     }, []);
    

//     return (
//         <div className="sales-report">
//             <h2>Sales Report</h2>
            
//             <table className="sales-table">
//                 <thead>
//                     <tr>
//                         <th>Customer Name</th>
//                         <th>Product Name</th>
//                         <th>Quantity</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td colSpan="3">{customerName}</td>
//                         <td></td>
//                     </tr>
//                     {purchasedItems.map((item, index) => (
//                         <tr key={index}>
//                             <td></td>
//                             <td>{item.productName}</td>
//                             <td>{item.quantity}</td>
//                             <td>${item.price}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default SalesReport;

