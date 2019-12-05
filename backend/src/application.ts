import * as express from "express";
import {Response} from "express";
import * as mysql from "mysql";
import "reflect-metadata";
import {dbConfig} from "../apiConfig";
import {pingController} from "./controllers/ping";

const app = express();

app.use(pingController);

const connexion = mysql.createConnection(dbConfig);

connexion.connect((err: Error) => {
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});

app.get("/",(res: Response) => {
    connexion.query('SELECT * FROM events LIMIT 5', (err, rows) => {
        if (!err) {
            res.json(rows);
        }
        else {
            console.log('Error while performing Query. ' + err);
        }
    });
});

export default app;
