import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, year, title, summary, poster, genres }){
    return(
        <Link to={{
            pathname : `/movie-detail/${id}`,
            state : {
                id, year, title, summary, poster, genres
            }
        }}>
            <div>
                <h1>{id}. {title}</h1>
                <img src={poster}/>
                <p>{year}</p>
                <ul>
                    {
                        genres.map((genres,index) => {
                            return <li key={index}>{index+1}{genres}</li>
                        })
                    }
                </ul>
                <p>{summary}</p>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
}

export default Movie;