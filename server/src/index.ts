import axios from "axios";
import express from 'express';
require('dotenv').config();

const cors = require('cors');

const app = express();
app.use(cors());

const port = `${process.env.PORT}`;

app.get('/', (req, res) => {
    // get url queries as key:value pairs
    const params = req.query;

    // build new url
    const targetURL: string = `${process.env.BASE_URL}&what=${params.what}&where=${params.where}`

    // Send request to axios. Return JSON.
    if (req.method === 'GET') {
        console.log(`Get req to ${targetURL}`);
        axios.get(targetURL)
            .then(response => {
                res.writeHead(200)
                res.end(JSON.stringify(response.data))
            })
            .catch(err => {
                console.log(err);
                res.writeHead(500);
                res.end(JSON.stringify(err))
            })
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})