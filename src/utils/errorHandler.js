class ClientError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    };
};

class ServerError extends Error {};
class ValidationError extends Error {};
class NotFoundError extends Error {};

module.exports = {
    ClientError,
    ServerError,
    ValidationError,
    NotFoundError,
};