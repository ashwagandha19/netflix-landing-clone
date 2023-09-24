import axios from '../axios';
import React, { useEffect, useState } from 'react'
import "../styles/Banner.css"
import requests from '../Requests'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            //^ we request the netflix originals through axios
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                //^ we randomly display a movie data as the banner, it is gonna be stored in the movie variable which we gonna use in the component creation down below
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;
        }
        
        fetchData();
    }, []);

    


    //^ we truncate the description if it has more that 150 chars
    function truncateDescription(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }


    const imageURL = 'https://image.tmdb.org/t/p/original/';


    //^ we do optional chaining "?" when we know that the variable it's gonna be undefined initially
    return (
        <header 
            className="banner"
            style={{
                backgroundImage: `url(${imageURL}${movie?.backdrop_path})`
        }}>
            <div className="backdrop"></div>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button"><PlayArrowIcon className="banner__icon"/>Play</button>
                    <button className="banner__button"><InfoIcon  className="banner__icon"/>More info</button>    
                </div>    
                <h1 className="banner__description">
                    {truncateDescription(movie?.overview, 150)}
                </h1>
            </div>  
            <div className="banner__fadeBottom"/>
        </header>
    )
}

export default Banner
