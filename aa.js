const express = require("express");
const app = express();
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculate-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

// Addition function
const add = (n1, n2) => { return n1 + n2; }

// Subtraction function
const subtract = (n1, n2) => { return n1 - n2; }

// Multiplication function
const multiply = (n1, n2) => { return n1 * n2; }

// Division function
const divide = (n1, n2) => {
    if (n2 === 0) {
        logger.error("Division by zero");
        throw new Error("Division by zero");
    }
    return n1 / n2;
}

// Endpoint for addition
app.get("/add", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            logger.error("Invalid input. Both n1 and n2 must be valid numbers.");
            throw new Error("Invalid input. Both n1 and n2 must be valid numbers.");
        }
        const result = add(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        logger.error(error.toString());
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Endpoint for subtraction
app.get("/subtract", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            logger.error("Invalid input. Both n1 and n2 must be valid numbers.");
            throw new Error("Invalid input. Both n1 and n2 must be valid numbers.");
        }
        const result = subtract(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        logger.error(error.toString());
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Endpoint for multiplication
app.get("/multiply", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            logger.error("Invalid input. Both n1 and n2 must be valid numbers.");
            throw new Error("Invalid input. Both n1 and n2 must be valid numbers.");
        }
        const result = multiply(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        logger.error(error.toString());
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Endpoint for division
app.get("/divide", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            logger.error("Invalid input. Both n1 and n2 must be valid numbers.");
            throw new Error("Invalid input. Both n1 and n2 must be valid numbers.");
        }
        const result = divide(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        logger.error(error.toString());
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

const port = 3040;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
