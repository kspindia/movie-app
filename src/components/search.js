import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../redux/feature/movieSlice';
import useStyles from '../styles'

const Search = () => {
    const [name, setName] = useState("spider");
    const {moviesList : {Error : error}} = useSelector((state)=>({...state.movie}))
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getMovies(name))
    },[name])
   
  return (
   <>
   <h2 className={classes.title}>Movie search app</h2>
   <form className={classes.form} onSubmit={(e)=> e.preventDefault()}>
    <TextField 
    type="text"
    fullWidth
    value={name}
    sx={{m: 1,width: "55ch"}}
    onChange={(e)=>setName(e.target.value)}
    />
    {error && <p className={classes.error}>{error}</p>}
   </form>
   </>
  )
}

export default Search