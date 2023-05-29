# Udacity NLP Project

## Table of Contents

- [Udacity NLP Project](#udacity-nlp-project)
  - [Table of Contents](#table-of-contents)
  - [Project Description](#project-description)
  - [Getting started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Main Dependencies](#main-dependencies)
  - [Copyright](#copyright)

## Project Description

[back to top](#table-of-contents)

This project is a small Node.js/Javascript application that analyzes the sentiment of text using a sentiment analysis API.
The application provides a web interface where users can enter text, which is then sent to the API for analysis.
The sentiment analysis API evaluates the sentiment of the text and returns the result to the user.

## Getting started

[back to top](#table-of-contents)

### Prerequisites

[back to top](#table-of-contents)

- Node.js Version 14.7.0
- API-Key from <https://www.meaningcloud.com/>

### Installation

[back to top](#table-of-contents)

1. Enter your API-Key in the .env file

    ```.dotenv
    API_KEY=<apikey>
    ```

1. Install dependencies with `npm install`
1. Build the project with `npm run build-prod`
1. Start the server with `npm run start`
1. Open the application in your browser at <http://localhost:8081>

## Main Dependencies

[back to top](#table-of-contents)

- Node.js Version 14.7.0
- Express Version 4.17.1
- webpack Version 4.35.3

## Copyright

The original code and portions of this project are derived from the [udacity/fend](https://github.com/udacity/fend) by [Udacity](https://github.com/udacity). The copyright for the original code belongs to the respective authors of the original repository.
