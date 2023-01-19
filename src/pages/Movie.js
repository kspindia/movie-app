import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from '../styles'
import {getMovie} from '../redux/feature/movieSlice'
import { useNavigate, useParams } from 'react-router-dom'

const Movie = () => {
  const dispatch = useDispatch();
  const { Movie} = useSelector((state)=>({...state.movie}));
  const classes = useStyles();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    if(id){
      dispatch(getMovie(id))
    }
  },[id])
  return (
    <div>Movie page</div>
  )
}

export default Movie