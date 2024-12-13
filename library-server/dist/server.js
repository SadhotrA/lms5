"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const PORT = config_1.config.server.port;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(async function startup() {
    try {
        await mongoose_1.default.connect(config_1.config.mongo.url, { w: "majority", retryWrites: true, authMechanism: "DEFAULT" });
        app.get("/health", (req, res) => {
            res.status(200).json({ message: "server is running properly" });
        });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("could not connect to database");
    }
})();
