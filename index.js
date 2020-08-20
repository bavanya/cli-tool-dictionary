#!/usr/bin/env node
const axios = require('axios').default;

//console.log(process.argv);
const term = process.argv[2];

function findDefinition(word) {
    definitions = [];
    listOfPossibilities = ["noun", "exclamation", "intransitive verb", "transitive verb", "verb", "abbreviation", "adjective", "adverb", "determiner", "crossReference", "preposition", "pronoun","conjunction", "interjection"];
    axios.get("https://api.dictionaryapi.dev/api/v1/entries/en/"+ word)
    .then(function(response) {
        if(response['message']==undefined){
            //console.log(response[0].meaning);
            for(var k = 0;k<response.length;k++){
                for(var i = 0;i<listOfPossibilities.length;i++){
                    if(response[k]['meaning'][listOfPossibilities[i]]!=undefined){
                        for(var j = 0; j<response[k]['meaning'][listOfPossibilities[i]].length;j++){
                            definitions.push(response[k]['meaning'][listOfPossibilities[i]][j]['definition']);
                        }
                    }
                }
            }
        } else {
            console.log("couldn't find the definiton")
        }

    })

    for(var i = 0; i<definitions.length;i++){
        console.log(definitons[i]);
    }
}

findDefinition(term);
