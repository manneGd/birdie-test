import * as express from "express";
import "reflect-metadata";
import {database} from "./controllers/databaseConnection";
import {eventsController} from "./controllers/events";

const app = express();
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});
database.connect((err: Error) => {
    if(!err) {
        app.use('/api/events', eventsController);
    }
});
app.use('/api/events', eventsController);

export default app;
