import express,{Express, Request, Response} from "express";
import mongoose from "mongoose";
import cors from "cors";
import {config} from "./config";

const PORT =config.server.port;

const app: Express = express();

app.use(express.json());
app.use(cors());

(async function startup() {
    try {
        await mongoose.connect(config.mongo.url,{w:"majority", retryWrites:true, authMechanism:"DEFAULT"});
    

    app.get("/health", (req:Request, res:Response) => {
        res.status(200).json({message: "server is running properly"});
    });
    
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    
    } catch (error) {
        console.error("could not connect to database");
    }


})();



