import * as express from 'express';
import * as path from 'path';

export class Routes {
    constructor(app:express.Express, config:any) {
        app.use(express.static(path.join(config.root + '/frontend')));
        app.use('/node_modules', express.static(path.join(config.root + '/node_modules')));
    }
}