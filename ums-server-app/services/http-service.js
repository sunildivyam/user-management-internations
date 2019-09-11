const http = require('http');
/*
    Promisifying the http calls, makes simpler to use http requests.
*/
module.exports = (url, method, body) => {
    method = method || '';
    return new Promise((resolve, reject) => {
        // checks if, req method is correct
        if (!['GET', 'POST', 'PUT', 'DELETE'].includes(method.toUpperCase())) {
            reject(new Error('Invalid Request method'));
        }
        // Checks if a valid URL.
        let urlObj;
        try {
            urlObj = new URL(url);
        } catch(err) {
            reject(new Error('Invalid Url'));
        }
        // set options for the http req
        const httpReqOptions = {
            method: method,
            host: urlObj.hostname,
            port: urlObj.port,
            path: urlObj.pathname,
            headers: {
                'Content-Type': 'application/json'                
            }
        };

        let bodyStr = '';
        if(body) {
            bodyStr = JSON.stringify(body);
            httpReqOptions.headers['Content-Length'] = bodyStr.length;
        }
        //make the http req
        const httpReq = http.request(httpReqOptions, resMsg => {            
            if(resMsg.statusCode < 200 || resMsg.statusCode >= 300) {                              
                reject({status: resMsg.statusCode, message: resMsg.statusMessage || 'Something went wrong'});
            } else {
                // collects response data chunks
                let chunks = '';
                resMsg.on('data', d => chunks += d);
                //when all response data is available
                resMsg.on('end', () => resolve(JSON.parse(chunks)));
            }
        });

        //if req failed due to some error.
        httpReq.on('error', err => reject(err));

        //if POST call and body, write the req
        if (body) {
            httpReq.write(bodyStr);
        }        
        //end the req
        httpReq.end();
    })
}