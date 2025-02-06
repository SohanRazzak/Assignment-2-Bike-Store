# Assignment - 02 (Bike Store)

### [Github](https://)

### [Live Server](https://)

### [Project Introduction Video](https://)

## About This Project

This is a server application to manage a store which sales Bike. This application has two main purpose, which are

- To manage products
- To manage orders

## Codebase Pattern

This application uses a feature based modular pattern to manage codebase for scalibility and readability. It has total two module.
Each module contains

1. A Route file containing all the api endpoints for the module.
2. A Controller file containing all the controller function needed.
3. A Service file managing all service for controller functions.
4. Interface and Model file (Separately) to safeguard type and manage mongoose model.
5. Validator file, Additional layer of data validation on runtime with Zod.

## Technology Used

- Dependencies

* Express Js (On top of node js): To create the server app.
* Mongoose (On top of mongodb): To interact with database.
* Zod: To add extra validation layer and validate data on runtime.
* Dotenv: To configure environment variables.
* Cors: To configure cross origin policies.

- Dev Dependencies

* Typescript: For type safety
* TS-Node-Dev: For watching changes in Ts files
* Eslint: For linting and fixing syntax
* Prettier: For beautify codes and get more readability
* And other type safety dev dependencies

## Routes

- `/` - Available for get and post method to create and get list of all bikes.
- `/:productId` - Available for get, put, delete method to get, update and delete single bike with matching "\_id"
- `/orders` - Available for post method to add new order data.
- `/orders/revenue` - Available for get method to get total revenue from orders.

## Full API Endpoint Table

## 🚲 Bikes API

| Method | Endpoint                   | Description         |
| ------ | -------------------------- | ------------------- |
| POST   | `/api/products/`           | Add a new bike      |
| GET    | `/api/products/`           | Get all bikes       |
| GET    | `/api/products/:productId` | Get a bike by ID    |
| PUT    | `/api/products/:productId` | Update a bike by ID |
| DELETE | `/api/products/:productId` | Delete a bike by ID |

---

## 🛒 Orders API

| Method | Endpoint              | Description                   |
| ------ | --------------------- | ----------------------------- |
| POST   | `/api/orders/`        | Create a new order            |
| GET    | `/api/orders/revenue` | Get total revenue calculation |

---

## 🏠 Home API

| Method | Endpoint | Description         |
| ------ | -------- | ------------------- |
| GET    | `/`      | Server status check |

---

## ❌ 404 - Not Found

| Method | Endpoint | Description                      |
| ------ | -------- | -------------------------------- |
| ALL    | `/*`     | Custom response for invalid URLs |
