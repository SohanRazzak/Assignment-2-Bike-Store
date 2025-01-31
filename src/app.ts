import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { bikeRouter } from './app/modules/Bikes/bikes.router';

// Creating Server App
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());


// API Endpoints
// Bikes Routers
app.use('/api/products', bikeRouter)


// API Home Route
const homeRouter = express.Router()
app.use("/", homeRouter)
homeRouter.get("", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Server is running (with local db)!"
    })
})

export default app;