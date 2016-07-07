import * as express from 'express';
import * as http from 'http';
import * as path from 'path';


var helpers = require('../config/helpers');

export class Server {
    private app: express.Express;
    private port = process.env.PORT || 3000;

    constructor() {
        this.app = express();
    }

    startServer() {
        this.app.use(express.static(helpers.root('frontend')));
        this.app.use('/node_modules',express.static(helpers.root('node_modules')));
        this.app.listen(this.port, () => {
            console.log("Server started with port", this.port);

        });
    }
}

