'use strict';

function checkTokenInHeader(req, res, next) {
    const headerToken = req.headers.token;
    if (headerToken === '1517099047' || req.url === 'v1/hello') {
        next();
    } else {
        throw new Error("Token mismatched!");
    }
}

module.exports = checkTokenInHeader;