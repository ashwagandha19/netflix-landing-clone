import React, { useEffect, useState } from 'react'
import axios from '../axios';
import "../styles/Row.css"


function Row({title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            //^ get an array with all the movies
            setMovies(request.data.results);
            return request;
        }
        
        fetchData();
    }, [fetchUrl]);


    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">


                {/*We do a check to see if the image url exists*/}
                {/*for large row we got poster_path and for classic row we got backdrop path*/}
                {movies.map(
                    (movie) => 
                        ((isLargeRow && movie.poster_path) || 
                            (!isLargeRow && movie.backdrop_path)) && (
                    <img 
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} 
                        alt={movie.name} 
                    />
                    )
                )}
            </div>

        </div>
    )
}

export default Row
