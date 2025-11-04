const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    socket: {
        host: 'redis-server',        // Auto-redirects to the container (service) called "redis-server" in the docker-compose.yml file
        port: 6379,
    },
});

client.connect();
client.set("visits", 0);

app.get("/", async (req, res) => {
    const visits = await client.get("visits");          // Counter 
    res.send("Number of visits " + visits);             // Sends Response to server of the num-of-visits
    await client.set("visits", parseInt(visits) + 1);   // Increments by 1
});

app.listen(8081, () => {
    console.log('I do be listening on port 8081 my g');
});