import * as path from 'path';

let configJson = {
    port: process.env.PORT || 5480,
    root : path.resolve(__dirname, '..')
};

export default configJson;