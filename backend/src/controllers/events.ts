import * as express from "express";
import * as mysql from "mysql";
import {database} from "./databaseConnexion";

export const eventsController = express.Router();

eventsController.get('/', (_, res) => {
    database.query('SELECT * FROM events LIMIT 5', (err, rows) => {
        if (!err) {
            res.status(200).json(rows);
        }
        else {
            res.status(200).json({'status': 'Error in the query', 'err': err});
        }
    });
});

eventsController.get('/time/:id', (req, res) => {
    const timestamp = req.params.id;
    const queryString = 'SELECT * FROM events WHERE timestamp = ? LIMIT 5';
    const queryFormat = mysql.format(queryString, [timestamp]);
    database.query(queryFormat, (err, rows) => {
        if (err) {
            res.status(200).json({'status': 'Error in the query', 'err': err});
        }
        else {
            res.status(200).json(rows);
        }
    });
});

eventsController.get('/type/:id', (req, res) => {
    const type = req.params.id;
    const queryString = 'SELECT * FROM events WHERE event_type = ? LIMIT 5';
    const queryFormat = mysql.format(queryString, [type]);
    database.query(queryFormat, (err, rows) => {
       if (err) {
           res.status(200).json({'status': 'Error in the query', 'err': err});
       }
       else {
           res.status(200).json(rows);
       }
    });
});

eventsController.get('/caregiver/:id', (req, res) => {
    const caregiver = req.params.id;
    const queryString = 'SELECT * FROM events WHERE caregiver_id = ? LIMIT 5';
    const queryFormat = mysql.format(queryString, [caregiver]);
    database.query(queryFormat, (err, rows) => {
        if (err) {
            res.status(200).json({'status': 'Error in the query', 'err': err});
        }
        else {
            res.status(200).json(rows);
        }
    });
});

eventsController.get('/mood/:id', (req, res) => {
    const mood = req.params.id;
    const queryString = 'SELECT * FROM events WHERE mood = ? LIMIT 5';
    const queryFormat = mysql.format(queryString, [mood]);
    database.query(queryFormat, (err, rows) => {
        if (err) {
            res.status(200).json({'status': 'Error in the query', 'err': err});
        }
        else {
            res.status(200).json(rows);
        }
    });
});
