# Food Delivery Website
- This project is a food delivery website built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
- The website allows users to browse a menu, place orders, and manage their accounts.


## Table of Contents
- Features
- Usage
- Technologies Used
- Contributing


### Features
- User Authentication and Authorization:
            Users can register and log in to their accounts using JWT-based authentication.
- Browse and search menu items:
            Users can view all available menu items, filter by category, and search for specific dishes.
- Add items to cart and place orders:
            Users can add items to their cart, update quantities, and remove items as needed.
- View order history:
            Users can view their past orders, including details and status updates.


### Usage
- Visit the Website:
        Open the browser and go to `https://food-delivery-website-client.onrender.com`.
- Register/Login:
        Register: Create a new account by providing your name, email, and password.
        Login: Access your account by entering your registered email and password.
- Browse Menu:
        Browse the available menu items and add them to your cart.
        Explore the available menu items, filter by categories 
- Place Order:
        After selcting food items,go to your cart,review your items(remove items),and place an order.
- Orders List:
        You can check previous orders in the orders page in the profile.


## Technologies Used
### Front-end :
- HTML, CSS, JavaScript: The core building blocks of the web interface.
- React.js : A JavaScript library for building user interfaces.
- Axios : A promise-based HTTP client for the browser and Node.js.

### Back-end :
- JavaScript: The primary programming language for backend development.
- Node.js : A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express.js : A web application framework for Node.js.

### Database :
- MongoDB : A NoSQL database for storing application data.

### Additional Libraries & Tools :
- JSON Web Tokens (JWT): For secure user authentication.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- React Router: For handling navigation in React applications.
- Mongoose : An ODM (Object Data Modeling) library for MongoDB and Node.js.
- JWT (JSON Web Tokens) : A library to help for authentication.
- Bcrypt : A library to help hash passwords.

## Getting Started :
Prerequisites

Node.js and npm (Node Package Manager)
MongoDB (Local setup or MongoDB Atlas)

## Installation :

1. Clone the Repository:

    git clone https://github.com/lokeshreddy2005/Food-Delivery-Website.git
  
    cd Food_Delivery_Website

2. Install Backend Dependencies:

    cd server
    npm install

3. Install Frontend Dependencies:

    cd client
    npm install

4. Set Environment Variables:

 - Create a '.env' file in the server directory.
 - Add necessary configurations (e.g., MongoDB URI, JWT Secret).

5. Run the Application:

- Run the backend server:

   cd backend 
   nodemon run server

    Ensure Nodemon is Installed.
    If Nodemon is not installed globally, install it using npm:
    npm install -g nodemon

- Run the frontend:
   
  cd frontend npm start

## Running the Application
- Access the application at localhost:3000 (or your configured port) in your web browser.

# Contributors
CS23BTECH11011 - B.Lokesh Reddy
