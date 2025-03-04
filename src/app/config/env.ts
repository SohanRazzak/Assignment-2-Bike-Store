import dotenv from 'dotenv';
import path from 'path';

// Configuring Environment Variables
dotenv.config({ path: path.join(process.cwd(), ".env") })


export default {
    db_url: process.env.DATABASE_URL,
    port: process.env.PORT
}