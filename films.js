let path = require('path');
let fs = require('fs');
let fetch = require('node-fetch');

fetch('https://api-ghibli.herokuapp.com/films')
.then(res => res.json())
.then(allFilms => {
    const favFilms = allFilms.map(film => ({
        id: film.id,
        title: film.title,
        description: film.description,
        rt_score: film.rt_score
    }));
    fs.writeFile(path.join(__dirname, 'favFilms.json'), JSON.stringify(favFilms, null, 2), (err) => {
        if (err){
            console.error('error writing file:', err);
        }else{
            console.log('file written successfully');
        }
    });
})
.catch(error => {
    console.error('error fetching films', error);
});


