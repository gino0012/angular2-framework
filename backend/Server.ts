/// <reference path="../typings/index.d.ts" />
import * as express from 'express';
import * as path from 'path';
import config from '../configs/config';
import {Routes} from './Routes';

export class Server {
    private app: express.Express;
    private port: number;

    constructor() {
        this.app = express();
        this.port = config.port;
    }

    startServer() {
        new Routes(this.app, config);
        this.app.listen(this.port, () => {
            console.log("Server started with port", this.port);
        });
    }
}

