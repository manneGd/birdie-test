import * as express from "express";
import * as path from "path";
import "reflect-metadata";
import {database} from "./controllers/databaseConnexion";
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

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'frontend/build')));
// Handle React routing, return all requests to React app
    app.get('*', (_, res) => {
        res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
    });
}

export default app;
