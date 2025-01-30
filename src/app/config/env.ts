import dotenv from 'dotenv';
import path from 'path';

// Configuring dotenv
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    port: process.env.PORT,
    db_url: process.env.DATABASE_URL,

}