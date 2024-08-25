let path = require('path');
let fs = require('fs');

let chirpArray = [
    {name: 'Cheryl', 
    text: 'I work as a psych Nurse'},
    {name: 'Joe',
    text: 'i dont use social media'},
    {name: 'Jay',
    text: 'Cant make the gym, played 4 games of softball'},
    {name: 'Jen', 
    text: 'sing with me on smule'},
    {name: 'Josh',
    text: 'I restore pinball machines'}  
]

const chirpsJson = JSON.stringify(chirpArray);

fs.writeFile(path.join(__dirname, 'chirps.json'), chirpsJson, (err) => {
    if (err){
        console.error('error writing file:', err);
    }else{
        console.log('file written successfully');
    }
});

fs.readFile(path.join(__dirname, 'chirps.json'), 'utf-8', (err,data) => {
    if (err){
        console.error('error reading file', err)
    }else{
        const chirps = JSON.parse(data);
        console.log(chirps);
    }
});