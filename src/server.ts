import mongoose from 'mongoose';
import config from './app/config/env';
import app from './app';

// Create a function to start Server
async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        console.log("Mongodb Connection Successful!");
        app.listen(config.port, () => console.log(`Server is running on Port: ${config.port}`));
    } catch (error) {
        console.log(error);
    }
}

// Starting Server
main();