import * as express from "express";
import "reflect-metadata";
import {database} from "./controllers/databaseConnexion";
import {eventsController} from "./controllers/events";
import {pingController} from "./controllers/ping";

const app = express();
app.use(pingController);
database.connect((err: Error) => {
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});
app.use('/events', eventsController);

export default app;
