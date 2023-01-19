import React from 'react'
import MoviesList from '../components/MoviesList'
import Search from '../components/search'

const Home = () => {
  return (
    <div>
        <h2>Home page</h2>
        <Search/>
        <MoviesList/>
    </div>
  )
}

export default Home