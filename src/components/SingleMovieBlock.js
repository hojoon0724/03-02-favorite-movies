function OneMovieBlock(props) {
  return (
    <div className="SingleMovieBlock">
      <div className="movie-poster">
        <img src={props.img} alt="" />
      </div>
      <div className="movie-details">
        <div className="name">{props.name}</div>
        <div className="year">{props.year}</div>
        <div className="rating">{props.rating}</div>
      </div>
    </div>
  )
}

export default OneMovieBlock
