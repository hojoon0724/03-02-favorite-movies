import SingleMovieBlock from './SingleMovieBlock'

function RenderMoviesBlock(props) {
  return (
    <div className="RenderMoviesBlock">
      {props.inputData.map(variable => (
        <SingleMovieBlock name={variable.name} year={variable.year} rating={variable.rating} img={variable.img} />
      ))}
    </div>
  )
}

export default RenderMoviesBlock
