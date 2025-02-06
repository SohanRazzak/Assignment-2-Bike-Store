# Assignment - 02 (Bike Store)

### [Github](https://https://github.com/SohanRazzak/Assignment-2-Bike-Store)

### [Live Server](https://assignment-2-coral-two.vercel.app/)

### [Project Introduction Video](https://)

## 🧩 About This Project

This is a server application to manage a store which sales Bike. This application has two main purpose, which are

- To manage products
- To manage orders

## 💻 Setting Up Locally

- To set up this project locally first of all you need to clone this project using any suitable CLI.

```
git clone https://github.com/SohanRazzak/Assignment-2-Bike-Store.git
```

- Then you have to install all the depenedencies on your local maching. Use this command

```
npm i
```

- Now you need to create a file with name `.env` in the root directory. The file should contain two environment variable.

```
DATABASE_URL=YOUR_MONGODB_CONNECTION_STRING
PORT=ANY_AVAILABLE_PORT
```

(Don't forget to change them with yours)

- Now the porject is ready to run on your local machine.

## 🗄 Codebase Pattern

This application uses a feature based modular pattern to manage codebase for scalibility and readability. It has total two module.
Each module contains

1. A Route file containing all the api endpoints for the module.
2. A Controller file containing all the controller function needed.
3. A Service file managing all service for controller functions.
4. Interface and
5. Model file (Separately) to safeguard type and manage mongoose model.
6. Validator file, Additional layer of data validation on runtime with Zod.

## ⚙ Technology Used

#### Dependencies

- Express Js (On top of node js): To create the server app.
- Mongoose (On top of mongodb): To interact with database.
- Zod: To add extra validation layer and validate data on runtime.
- Dotenv: To configure environment variables.
- Cors: To configure cross origin policies.

#### Dev Dependencies

- Typescript: For type safety
- TS-Node-Dev: For watching changes in Ts files
- Eslint: For linting and fixing syntax
- Prettier: For beautify codes and get more readability
- And other type safety dev dependencies

## 🚩 Routes

- `/` - Available for get and post method to create and get list of all bikes.
- `/:productId` - Available for get, put, delete method to get, update and delete single bike with matching "\_id"
- `/orders` - Available for post method to add new order data.
- `/orders/revenue` - Available for get method to get total revenue from orders.

## 💯 Full API Endpoint Table

## 🚲 Bikes API

| Method | Endpoint                                                            | Description         |
| ------ | ------------------------------------------------------------------- | ------------------- |
| POST   | `https://assignment-2-coral-two.vercel.app/api/products/`           | Add a new bike      |
| GET    | `https://assignment-2-coral-two.vercel.app/api/products/`           | Get all bikes       |
| GET    | `https://assignment-2-coral-two.vercel.app/api/products/:productId` | Get a bike by ID    |
| PUT    | `https://assignment-2-coral-two.vercel.app/api/products/:productId` | Update a bike by ID |
| DELETE | `https://assignment-2-coral-two.vercel.app/api/products/:productId` | Delete a bike by ID |

---

## 🛒 Orders API

| Method | Endpoint                                                       | Description                   |
| ------ | -------------------------------------------------------------- | ----------------------------- |
| POST   | `https://assignment-2-coral-two.vercel.app/api/orders/`        | Create a new order            |
| GET    | `https://assignment-2-coral-two.vercel.app/api/orders/revenue` | Get total revenue calculation |

---

## 🏠 Home API

| Method | Endpoint                                     | Description         |
| ------ | -------------------------------------------- | ------------------- |
| GET    | `https://assignment-2-coral-two.vercel.app/` | Server status check |

---

## ❌ 404 - Not Found

| Method | Endpoint                                      | Description                      |
| ------ | --------------------------------------------- | -------------------------------- |
| ALL    | `https://assignment-2-coral-two.vercel.app/*` | Custom response for invalid URLs |
