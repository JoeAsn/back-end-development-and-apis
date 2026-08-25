const isPrime = require("./index.js")
const assert = require("node:assert/strict");

assert.strictEqual(
    isPrime(1) , false
);
assert.strictEqual(
    isPrime(3) , true
)
assert.strictEqual(
    isPrime(4) , false
)