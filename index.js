#!/usr/bin/env node

const axios = require('axios').default;

//console.log(process.argv);
const term = process.argv[2];

function findDefinition(word) {

    axios.get("https://api.dictionaryapi.dev/api/v1/entries/en/"+ word)
    .then(function(res) {
        //different definitions are received
        //also the api might not always be able to fetch the definition

    })
}

findDefinition(term);
