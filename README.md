# Final Project - React Store

## Description

This project is a Single Page Application (SPA) e-commerce developed with React. It allows you to browse a product catalog, view details, add products to the cart, and make purchases. The application is connected to Firebase Firestore, which is used as a database to store products and record purchase orders.

## Technologies Used

- React (with hooks and React Router)  
- Firebase Firestore for cloud database  
- Context API for global cart state management  
- CSS for custom styles  
- Font Awesome for icons  

## Main Features

- Dynamic product listing fetched from Firestore.  
- Detailed view of each product with quantity selection (validated against stock).  
- Shopping cart with product summary, quantities, and totals.  
- SPA navigation between catalog, categories, detail, cart, and checkout.  
- Purchase order registration in Firestore, showing the user the generated order ID.  
- Conditional rendering for loading states, empty cart, and out-of-stock products.  
- Validations in the checkout form to ensure correct data.  
- Simple contact section for communication with the site. 
- Show loading message for products or product              

## Component Structure

- `App`  
- `NavBar` with `CartWidget`
- `Buttons` 
- `ItemListContainer` with `Item`
- `ItemDetailContainer` with `ItemDetail` with `ItemCount` and `NavBar`  
- `Cart`  
- `CheckoutForm`  
- `Contact`

## How to Run the Project Locally

Follow these steps to clone, install, and run the application on your machine:  

1. Clone the repository:
    git clone https://github.com/FrancoCarranza/ProyectoFinalCarranza.git
2. Enter the project folder:
    cd ProyectoFinalCarranza
3. Install dependencies:
    npm install
4. Run the application in development mode:
    npm start  or npm run dev if you use Vite 
5. Open the URL in your browser:
    http://localhost:3000


## Final Considerations

The project follows React best practices, with a clear separation of container and presentation components. Tests were performed to ensure smooth navigation without reloads. Firebase credentials are managed with environment variables to protect sensitive information.

---

For any questions or suggestions, I am available to answer them.

---

**Author:** Franco Carranza  
**Date:** 2025  