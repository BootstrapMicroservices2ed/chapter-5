const express = require("express");
const os = require("os");

//
// Throws an error if the PORT environment variable is missing.
//
if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

//
// Extracts environment variables to globals for convenience.
//

const PORT = process.env.PORT;

//
// Application entry point.
//
async function main() {
    // Change this line to test active-load
    console.log("Hello world!");

    const app = express();

    // ... add route handlers here ...

    app.listen(PORT, () => {
        console.log(`History service online on ${os.hostname()} port ${PORT} [${os.platform()}]`);
    });
}

main()
    .catch(err => {
        console.error("History service failed to start.");
        console.error(err && err.stack || err);
    });