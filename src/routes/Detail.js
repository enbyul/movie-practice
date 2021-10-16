import React from "react";

// function Detail(props){
//     console.log(props);
//     const { location : { state : {id, year, title, summary, poster, genres}} } = props;
//     return(
        // <div>
        //         <h1>{id}. {title}</h1>
        //         <img src={poster}/>
        //         <p>{year}</p>
        //         <ul>
        //             {
        //                 genres.map((genres,index) => {
        //                     return <li key={index}>{index+1}{genres}</li>
        //                 })
        //             }
        //         </ul>
        //         <p>{summary}</p>
        //     </div>
//     )
// }

class Detail extends React.Component{
    componentDidMount(){
        // const {location: {state}, history} = this.props;
        // if(state === undefined){
        //     history.push('/');
        // }
    }
    render(){
        console.log(this.props);
        const {location: {state}} = this.props;
        if(state){
            return(
                <div>
                    <h1>{state.id}. {state.title}</h1>
                    <img src={state.poster}/>
                    <p>{state.year}</p>
                    <ul>
                        {
                            state.genres.map((genres,index) => {
                                return <li key={index}>{index+1}{genres}</li>
                            })
                        }
                    </ul>
                    <p>{state.summary}</p>
                </div>
            )
        }else{
            return null;
        }
    }
}

export default Detail;