import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { bikeRouter } from './app/modules/Bikes/bikes.router';
import { orderRouter } from './app/modules/Orders/orders.router';

// Creating Server App
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());


// API Endpoints
// Bikes Routers
app.use('/api/products', bikeRouter)
// Orders Routers
app.use('/api/orders', orderRouter)


// API Home Route
const homeRouter = express.Router()
app.use("/", homeRouter)
homeRouter.get("", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Server is running!"
    })
})


// Custom JSON Response for 404 Endpoint
app.all("/*", async (req: Request, res: Response) => {
    try {
        res.status(404).json({
            success: false,
            message: "Something Went Wrong!"
        })
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
})

export default app;