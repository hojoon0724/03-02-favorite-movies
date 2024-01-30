import './App.css'
import RenderMoviesBlock from './components/RenderMoviesBlock'
import './style.css'

function App() {
  const moviesData = [
    {
      name: 'The Death of Stalin',
      year: '2017',
      rating: 'R',
      img: 'https://m.media-amazon.com/images/M/MV5BMTcxMDc1NjcyNl5BMl5BanBnXkFtZTgwNDU0NDYxMzI@._V1_FMjpg_UY710_.jpg'
    },
    {
      name: 'Dunkirk',
      year: '2017',
      rating: 'PG-13',
      img: 'https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UY711_.jpg'
    },
    {
      name: 'Looper',
      year: '2012',
      rating: 'R',
      img: 'https://m.media-amazon.com/images/M/MV5BMTg5NTA3NTg4NF5BMl5BanBnXkFtZTcwNTA0NDYzOA@@._V1_FMjpg_UY710_.jpg'
    },
    {
      name: 'Ex-Machina',
      year: '2014',
      rating: 'R',
      img: 'https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_FMjpg_UY711_.jpg'
    },
    {
      name: 'Mission: Impossible - Fallout',
      year: '2017',
      rating: 'PG-13',
      img: 'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_FMjpg_UY750_.jpg'
    },
    {
      name: 'Senna',
      year: '2010',
      rating: 'PG-13',
      img: 'https://m.media-amazon.com/images/M/MV5BMTc5MTUzOTAxMl5BMl5BanBnXkFtZTcwODQzMjg3NA@@._V1_FMjpg_UY711_.jpg'
    }
  ]

  return (
    <div className="App">
      <RenderMoviesBlock inputData={moviesData} />
    </div>
  )
}

// ;<div className="App">
//   <RenderMoviesBlock movies={movies} />
// </div>

export default App
