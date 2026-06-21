# Myntra Clone – Full Stack E-Commerce Application

A full-stack **Myntra-inspired E-Commerce Web Application** built using **React, Redux Toolkit, React Router, Bootstrap, Node.js, and Express.js**. The project provides a modern shopping experience where users can browse products, add/remove items from the shopping bag, and view a dynamic order summary.

# Project Overview

This project is a simplified clone of the Myntra shopping platform. It consists of:

- Frontend built with React and Vite
- Backend built with Node.js and Express.js
- Redux Toolkit for state management
- React Router for navigation
- Bootstrap for responsive UI

The application fetches product data from the backend and allows users to manage their shopping bag with real-time price calculations.


# Features

## 1. Product Listing

- Display products with images, ratings, prices, and discounts
- Responsive product grid layout

## 2. Shopping Bag

- Add products to bag
- Remove products from bag
- Dynamic bag item count

## 3. Price Summary

- Total MRP calculation
- Discount calculation
- Convenience fee calculation
- Final payable amount

## 4. State Management

- Redux Toolkit for centralized state management
- Efficient handling of products and bag items

## 5. Backend API

- Express.js server
- Serves product data through API endpoints

## 6. Responsive UI

- Mobile-friendly design
- Clean and modern interface

# Tech Stack

## Frontend

- React 19
- Redux Toolkit
- React Redux
- React Router DOM
- React Icons
- Bootstrap 5
- Vite

## Backend

- Node.js
- Express.js
- Body Parser

## 📂 Project Structure

```text
├── 2-actual-backend
│   ├── data
│   ├── app.js
│   ├── items.json
│   ├── package.json
│   └── package-lock.json
│
├── Myntra-project
│   ├── public
│   │   └── images
│   ├── src
│   │   ├── components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HomeItem.jsx
│   │   │   ├── BagItems.jsx
│   │   │   ├── BagSummary.jsx
│   │   │   ├── FetchItems.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   │
│   │   ├── routes
│   │   ├── store
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── README.md
```

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/myntra-clone.git
cd myntra-clone
```

### 2. Install Backend Dependencies

```bash
cd 2-actual-backend
npm install
```

### 3. Start Backend Server

```bash
npm start
```

Backend will run on:

```text
http://localhost:8080
```

### 4. Install Frontend Dependencies

Open a new terminal:

```bash
cd Myntra-project
npm install
```

### 5. Start Frontend

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

##  API Endpoint

### Get All Products

```http
GET /items
```

Example Response:

```json
[
  {
    "id": 1,
    "company": "Nike",
    "item_name": "Running Shoes",
    "current_price": 2999
  }
]
```

---

##  Redux Store

The project uses Redux Toolkit for state management.

| Slice | Purpose |
|---------|---------|
| bagSlice | Manage shopping bag |
| itemSlice | Store products |
| fetchStatusSlice | Loading state handling |


## Learning Outcomes

This project demonstrates:

- React Component Architecture
- Redux Toolkit State Management
- React Router Navigation
- API Integration
- Express Backend Development
- E-Commerce Workflow
- Responsive UI Design

## 📸 Screenshots

Add your project screenshots here.

### Home Page

```md
![Home Page](screenshots/home.png)
```

### Shopping Bag

```md
![Bag Page](screenshots/bag.png)
```

---

## 🚀 Future Improvements

- User Authentication
- Search Functionality
- Product Categories
- Wishlist Feature
- Payment Gateway Integration
- Order History
- MongoDB Database Integration
- Admin Dashboard

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Add feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Open a Pull Request

---

##  License

This project is developed for **educational and learning purposes only** and is not affiliated with or endorsed by Myntra.

---

##  Author

### Muhammad Ali


⭐ If you found this project useful, don't forget to give it a star on GitHub!
