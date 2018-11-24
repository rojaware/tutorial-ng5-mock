var canned = require('canned')
  ,   http = require('http')
  ,   opts = { cors: true, logger: process.stdout, sanitize: false, response_delay: 300};
 
can = canned('./mocks', opts);
 
http.createServer(can).listen(process.env.PORT || 8800);