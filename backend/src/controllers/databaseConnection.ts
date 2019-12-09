import * as mysql from "mysql";
import {dbConfig} from "../../apiConfig";

export const database = mysql.createConnection(dbConfig);