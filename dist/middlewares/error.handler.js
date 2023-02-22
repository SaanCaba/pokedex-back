export function logErrors(error, req, res, next) {
    // console.log(error);
    next(error);
}
export function boomErrorHandler(error, req, res, next) {
    if (error.isBoom) {
        //output es de Boom y tiene la info del error
        const { output } = error;
        console.log("outputtt", output);
        return res.status(output.statusCode).json(output.payload);
    }
    next(error);
}
export function errorHandler(error, req, res, next) {
    return res.status(500).json({
        message: error.message,
        stack: error.stack,
    });
}
//# sourceMappingURL=error.handler.js.map