import fs, { read } from 'fs';


function logReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(filename, `\n${Date.now()}:${req.ip} ${req.method}:${req.path}\n`, (error, data) => {
            next();
        });
    };
};


export default logReqRes;