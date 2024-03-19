function solve(array) {
    const movies = [];

    for (const line of array) {
        if (line.includes('addMovie')) {
            const movieName = line.substring('addMovie'.length+1);
            const movie = {
                name: movieName,
            };

            movies.push(movie);
            
        } else if (line.includes('directedBy')) {
            const [movieName, director] = line.split(' directedBy ');
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.director = director;
            }
        } else if (line.includes('onDate')) {
            const [movieName, date] = line.split(' onDate ');
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.date = date;
            }

            
        }
    }
    movies
        .filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));
}

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);