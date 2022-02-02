import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './request';

const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(requests.fetchNetflixOriginals);
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
        }

        fetchMovie();
    }, []);

    function truncate(text, n) {
        if(text?.length > n) {
            return text.substr(0, n -1 ) + " ...";
        }
        
        return text;
    }

  return <div className='banner' style={{
        backgroundImage: `url('${base_url}${movie.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundRepeat: "center center"
      }}>
        <div className="banner__content">
            <h1 className='title'>{movie.name}</h1>
            <div className="overview">
                <h2>{truncate(movie.overview, 150)}</h2>
            </div>
            <div className="button">
                <button className="banner__button">Play</button>
                <button className="banner__button">List</button>
            </div>
        </div>
        <div className="banner--fadeBottom"></div>
  </div>;
}

export default Banner;
