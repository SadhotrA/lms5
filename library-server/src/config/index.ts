import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME:string = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD:string = process.env.MONGO_PASSWORD || "";

const MONGO_URL:string = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:27017/`;

const PORT:number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 8000;

export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: PORT
    }
};
