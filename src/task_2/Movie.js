// import './Movie.css';

function Movie(props) {
    return (
        <>
            <h3>{props.title}</h3>
            <img src={props.poster} className="poster" alt="poster" />
                <div><b>Director: </b>{props.director}</div>
                <div><b>Genre: </b>{props.genre}</div>
                <div><b>Year: </b>{props.year}</div>
                <div><b>Studio: </b>{props.studio}</div>
                <div><b>Cast: </b>{props.cast}</div>
        </>
    );
}
  
export default Movie;