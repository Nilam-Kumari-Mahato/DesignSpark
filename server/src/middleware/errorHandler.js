/**
 * errorHandler.js
 * Centralized error-handling middleware.
 * Express calls this automatically when next(err) is invoked.
 */

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    console.error(`[Error] ${statusCode} — ${message}`);

    res.status(statusCode).json({
        success: false,
        error: message,
    });
}

module.exports = errorHandler;
