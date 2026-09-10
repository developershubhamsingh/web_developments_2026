let b = {};
"
let movieName = Hello Brother";
let movieRating: 4.5;
let movieType: "Action";


let movieName: "Haunted";
let movieRating: 4.5;
let movieType: "Horror";


let movie = {
    name: "Hello Brother",
    Rating: 4.5,
    Type: "Horror",
}

movie
{ name: 'Hello Brother', Rating: 4.5, Type: 'Horror' }
movie.name
'Hello Brother'
movie.Rating
4.5
movie.Type
'Horror'

// Adding value
movie.ind = "Bollywood"
'Bollywood'
movie
{ name: 'Hello Brother', Rating: 4.5, Type: 'Horror', ind: 'Bollywood' }

// Deleting value
delete movie.ind
true
movie
{ name: 'Hello Brother', Rating: 4.5, Type: 'Horror' }


// JSON : javascript object Notation
// JSON is a way to represent the data 

// Array of Objects :
let movie = [
    {
        name: "Hello Brother",
        Rating: 4.5,
        Type: "Horror",
    },
    {
        name: "Haunted",
        Rating: 4.5,
        Type: "Horror",
    }
]


movie[0]
{ name: 'Hello Brother', Rating: 4.5, Type: 'Horror' }
movie[1]
{ name: 'Haunted', Rating: 4.5, Type: 'Horror' }
movie[0].name

'Hello Brother'
movie[1].name


'Haunted'