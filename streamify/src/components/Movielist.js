
import "./Movielist.css"
function Movielist({movie}){
return(
    <div className="card-container">
        <div className="card-img-container">
            <img className="card-img" src={movie.poster_path}/>
        </div>
        <div className="card-details">
        <div>
            <span className="title">{movie.original_title}</span>
        </div>
        <div>
            <span className="gener">{movie.overview}</span>
        </div>
        <div className="rattings">
            <span>rating: {movie.vote_average}</span>
            <span>{movie.release_date}</span>
        </div>

        </div>
        
        
    </div>
    
)

}
export default Movielist;