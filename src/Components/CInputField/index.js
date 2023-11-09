import { TextField } from '@mui/material'
import React from 'react'
import styles from './Styles'

const InputField = (props) => {
  
  const classes = styles();

  return (
    <TextField {...props} className={classes.input}/>
  )
}

export default InputField
