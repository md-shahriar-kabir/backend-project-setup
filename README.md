# 🛒 Single Vendor E-commerce

A database design for a **Single Vendor E-commerce System**. This project defines the core entities and relationships required to manage users, products, categories, carts, orders, payments, addresses, and reviews.

## 📌 Project Overview

The system is designed for a single-vendor online store where customers can:

- Register and manage their accounts
- Browse products and categories
- Add products to a shopping cart
- Manage delivery addresses
- Place orders
- Make payments
- Review and rate products

The admin/vendor can manage products, categories, inventory, orders, users, and reviews.

## 🗃️ ERD

The Entity Relationship Diagram represents the database structure and relationships between the major entities.

> Add the exported ERD image to the `docs` folder and update the path below if necessary.

![Single Vendor E-commerce ERD](./docs/single-vendor-ecommerce-erd.png)

## 🧩 Main Entities

### 👤 Users
Stores customer and admin information.

- User ID
- Name
- Email
- Password
- Phone
- Role
- Created At

### 📍 Addresses
Stores delivery addresses associated with users.

- Address ID
- User ID
- Address
- City
- Postal Code
- Default Address

### 📂 Categories
Stores product categories.

- Category ID
- Name
- Slug
- Description
- Status

### 📦 Products
Stores products available in the store.

- Product ID
- Category ID
- Name
- Slug
- Description
- Price
- Stock
- Status
- Created At

### 🖼️ Product Images
Stores multiple images for products.

- Image ID
- Product ID
- Image URL
- Primary Image Status

### ⭐ Reviews
Stores customer reviews and ratings.

- Review ID
- User ID
- Product ID
- Rating
- Comment
- Created At

### 🛒 Carts
Stores shopping carts for users.

- Cart ID
- User ID
- Created At
- Updated At

### 🛍️ Cart Items
Stores products and quantities inside a cart.

- Cart Item ID
- Cart ID
- Product ID
- Quantity

### 📋 Orders
Stores customer orders.

- Order ID
- User ID
- Address ID
- Total Amount
- Order Status
- Payment Status
- Created At

### 📦 Order Items
Stores individual products included in an order.

- Order Item ID
- Order ID
- Product ID
- Quantity
- Unit Price
- Subtotal

### 💳 Payments
Stores payment information for orders.

- Payment ID
- Order ID
- Amount
- Payment Method
- Transaction ID
- Payment Status
- Paid At

## 🔗 Entity Relationships

| Relationship | Type |
|---|---|
| Users → Addresses | 1 : N |
| Users → Carts | 1 : 1 |
| Users → Orders | 1 : N |
| Users → Reviews | 1 : N |
| Categories → Products | 1 : N |
| Products → Product Images | 1 : N |
| Products → Reviews | 1 : N |
| Products → Cart Items | 1 : N |
| Products → Order Items | 1 : N |
| Carts → Cart Items | 1 : N |
| Orders → Order Items | 1 : N |
| Orders → Payments | 1 : 1 |
| Addresses → Orders | 1 : N |

## 🔄 E-commerce Flow

```text
User
 │
 ├── Address
 │
 ├── Cart
 │    └── Cart Items
 │          └── Products
 │
 ├── Orders
 │    ├── Order Items
 │    │     └── Products
 │    └── Payment
 │
 └── Reviews
       └── Products

Categories
     │
     └── Products
            └── Product Images
```

## 🔐 Database Design

The database uses **Primary Keys (PK)** and **Foreign Keys (FK)** to maintain relationships and referential integrity between entities.

Examples:

```text
products.category_id → categories.id

orders.user_id → users.id

orders.address_id → addresses.id

order_items.order_id → orders.id

order_items.product_id → products.id

payments.order_id → orders.id

reviews.user_id → users.id

reviews.product_id → products.id
```

## 🚀 Core Features

### Customer

- Authentication
- Profile management
- Address management
- Product browsing
- Category-based product browsing
- Shopping cart
- Checkout
- Order placement
- Payment
- Order tracking
- Product reviews and ratings

### Admin

- User management
- Category management
- Product management
- Inventory management
- Order management
- Payment management
- Review management

## 📁 Suggested Project Structure

```text
single-vendor-ecommerce/
│
├── README.md
├── docs/
│   └── single-vendor-ecommerce-erd.png
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── middlewares/
│   ├── utils/
│   └── config/
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

## 🔮 Future Improvements

- Wishlist
- Coupons and discounts
- Product variants
- Shipping management
- Order cancellation
- Refund management
- Notifications
- Stock history
- Admin dashboard
- Sales analytics
- Product search
- Product recommendation system

## 👨‍💻 Author

**MD Shahriar Kabir**

MERN / Full-Stack Developer

## 📄 License

This project is created for educational and development purposes.
