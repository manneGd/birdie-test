import * as express from "express";
import {database} from "./databaseConnexion";

export const eventsController = express.Router();

eventsController.get('/events', (_, res) => {
    database.query('SELECT * FROM events LIMIT 5', (err, rows) => {
        if (!err) {
            res.status(200).json(rows);
        }
        else {
            res.json({'code': 100, 'status': 'Error in the query'});
        }
    });
});