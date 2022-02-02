import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from './axios'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({title, url, isLarge}) {

    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailUrl] = useState('');

    useEffect(() => {
        const getMovie = async () => {
            const response = await axios.get(url);
            setMovies(response.data.results);
        }

        getMovie();
    }, []);

    const opts = {
        height: '390',
        width: '99%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailUrl('');
        } else{
            movieTrailer(movie.title || movie.name).then(response => {
                const urlParams = new URLSearchParams(new URL(response).search);
                setTrailUrl(urlParams.get('v'));
                console.log(urlParams.get('v'));
            }).catch(err => console.log(err));
        }
    }
    
  return <div className='row'>
      <h2>{title}</h2>
      <div className="poster_cover">
        {
            movies.map(movie => (
            <img 
                    src={`${base_url}${isLarge ? movie.backdrop_path : movie.poster_path}`} 
                    alt={movie.name} className={`row_poster ${isLarge ? 'isLarge' : ''}`} 
                    onClick={() => handleClick(movie)}
                />)
            )
        }
      </div>
      { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
  </div>;
}

export default Row;
