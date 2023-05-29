const meaninglcoudApiUrl = "https://api.meaningcloud.com/sentiment-2.1";
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
const FormData = require("form-data");
const fetch = require("node-fetch");

dotenv.config();

const app = express()
app.use(express.static('dist'))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test', async function (req, res) {
    const response = await analyzeSentiment(req.body.text);
    res.send(response);
  });


//Aufruf richtung Sentiment API funktioniert. Textparameter muss noch übergeben werden
async function analyzeSentiment(text) {
    const apiKey = process.env.API_KEY;
    const apiUrl = meaninglcoudApiUrl;

    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("txt", text);
    formdata.append("lang", "en");

    const requestOptions = {
        method: 'POST',
        body: formdata
    };

    return await fetch(meaninglcoudApiUrl, requestOptions)
        .then(response =>
            response.json()
        )
        .then(function(response) {
            return {
                subjectivity: response.subjectivity,
                text: response.sentence_list[0].text
            }
        });
  }
