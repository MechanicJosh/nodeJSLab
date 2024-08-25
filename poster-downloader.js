let fetch = require('node-fetch');
let https = require('https');
let fs = require('fs');
const path = require('path');

fetch('https://api-ghibli.herokuapp.com/films')
.then(res => res.json())
.then(data => {
    data.forEach(film => {
        const movieImage = film.movie_banner;
        const filePath = path.join(__dirname, 'downloads', `${film.id}${path.extname(movieImage)}`);
        const file = fs.createWriteStream(filePath);

        https.get(movieImage, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log('download completed and file written successfully');
            });
        }).on('error', (err) => {
            console.log('Error downloading the image', err);
        });
    });  
})
.catch(err => {
    console.error('Error fetching movie Images', err)
});


 