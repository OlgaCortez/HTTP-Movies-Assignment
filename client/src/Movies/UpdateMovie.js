import React, {useState, useEffect} from 'react';
import axios from 'axios';

const initialMovie = {
    title: '',
    director: '',
    metascore: '',
    stars: []
};

const UpdateMovie = props => {
    const [movie, setMovie] = useState(initialMovie);
    useEffect(() => {
        const movieToUpdate = props.movies.find(
            movie => `${movie.id}` === props.match.params.id
        );

        if (movieToUpdate) setMovie(movieToUpdate);
    }, [props.movies, props.match.params.id]);

    // const handleChange = e => {
    //     e.persist();
    //     let value = e.target.value;
    //     if(e.target.name === '')
    // }

  
    const handleSubmit = e => {
        e.preventDefault();
        axios
        .put(`http://localhost:5000/api/update-movie/${movie.id}`, movie)
        .then(res => {
            props.updateMovies(res.data);
            props.history.push('/movies/list');
        })
        .catch(err => console.log(err));
    };

    return(
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="title"
                placeholder="Title"
                value={movie.Title}
                />

                <input
                type="text"
                name="director"
                placeholder="Director"
                value={movie.director}
                />

                <input
                type="number"
                name="metascore"
                placeholder="Metascore"
                value={movie.metascore}
                />

                <input
                type="text"
                name="stars"
                placeholder="Stars"
                value={movie.stars}
                />

                <button>Update Movie</button>
            </form>
        </div>
    )

}

export default UpdateMovie;