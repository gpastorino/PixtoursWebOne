
//how does this formatter work? 


//

module.exports = (request, response, next) => {
        response.success = function(statusCode, data) {
          const responseObj = {
            status: statusCode,
            data: data,
            length: data.length,
            requestedAt: new Date().toLocaleString(),
            message: 'Your comment has been received.'
          };
          this.status(statusCode).json(responseObj);
        };
      
        response.error = function(statusCode, message) {
          this.status(statusCode).json({
            status: statusCode,
            message,
            requestedAt: new Date().toLocaleString()
          });
        };
      
        next();
      };