const express = require("express");
const app = express();

// Addition function
const add = (n1, n2) => { return n1 + n2; }

// Subtraction function
const subtract = (n1, n2) => { return n1 - n2; }

// Multiplication function
const multiply = (n1, n2) => { return n1 * n2; }

// Division function
const divide = (n1, n2) => {
    if (n2 === 0) {
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
            throw new Error("Invalid input. Both n1 and n2 must be valid numbers.");
        }
        const result = add(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Endpoint for subtraction
app.get("/subtract", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            throw new Error("Invalid input. Both n1 and n2 must be valid numbers.");
        }
        const result = subtract(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Endpoint for multiplication
app.get("/multiply", (req, res) => {
    try {
        console.log("Request received for multiplication");
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            throw new Error("Invalid input. Both n1 and n2 must be valid numbers.");
        }
        const result = multiply(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Endpoint for division
app.get("/divide", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1) || isNaN(n2)) {
            throw new Error("Invalid input. Both n1 and n2 must be valid numbers.");
        }
        const result = divide(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

const port = 3040;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
