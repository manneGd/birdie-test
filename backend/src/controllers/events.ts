import * as express from "express";
import {Response} from "express";
import * as mysql from "mysql";
import {database} from "./databaseConnection";

export const eventsController = express.Router();

eventsController.get('/', (req, res) => {

    const page = req.query.page ? req.query.page : 0;
    const offset = page * 25;
    database.query('SELECT * FROM events ORDER BY timestamp DESC LIMIT ' + offset +',25',
        (err, rows) => {
        if (!err) {
            res.status(200).json(rows);
        }
        else {
            res.status(400).json({'status': 'Error in the query', 'err': err});
        }
    });
});

function queryHandler(columnName: string, param: any, res: Response) {
    const queryString = 'SELECT * FROM events WHERE '+ columnName +' = ? LIMIT 5';
    const queryFormat = mysql.format(queryString, [param]);
    database.query(queryFormat, (err, rows) => {
        if (err) {
            res.status(400).json({'status': 'Error in the query', 'err': err});
        }
        else {
            res.status(200).json(rows);
        }
    });
}

eventsController.get('/time/:id', (req, res) => {
    const timestamp = req.params.id;
    queryHandler('timestamp', timestamp, res);
});

eventsController.get('/type/:id', (req, res) => {
    const type = req.params.id;
    queryHandler('event_type', type, res);
});

eventsController.get('/caregiver/:id', (req, res) => {
    const caregiver = req.params.id;
    queryHandler('caregiver_id', caregiver, res);
});

eventsController.get('/mood/:id', (req, res) => {
    const mood = req.params.id;
    queryHandler('mood', mood, res);
});
