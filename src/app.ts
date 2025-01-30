import express, { Application } from 'express';
import cors from 'cors';

// Creating Server App
const app: Application = express();


// Parsers
app.use(express.json())
app.use(cors());


// Application Routes (Routers from differen module will point here)
// routers for bikes
app.use('/api/products',)

// routers for orders
app.use('/api/orders',)