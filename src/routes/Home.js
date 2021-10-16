import React from "react";
import axios from "axios";
import Movie from "../component/Movies";

class Home extends React.Component{
  state = {
    isLoading : true
  }

  getMovies = async () => {
    const { data: { data: { movies }}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating") ;
    console.log(movies)
    this.setState({movies, isLoading : false});
    //그냥 axios로 불러온거 콘솔 찍으면 암것도 안나옴. 로드 되기전에 출력됨
    //async, await으로 axios로 부른거 다 불러올때까지 기다려 ! 하고 다 불러오면 콘솔찍음.
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    console.log("render");
    console.log(this.state)
    const { isLoading, movies } = this.state;
    return(
      <>
        <div>{ isLoading ? "Loading..." : 
          movies.map((movie) => {
            return <Movie key={movie.id} title={movie.title} year={movie.year} summary={movie.summary} poster={movie.small_cover_image} id={movie.id} genres={movie.genres} />
          })
         }</div>
      </>
    )
  }
}

export default Home;