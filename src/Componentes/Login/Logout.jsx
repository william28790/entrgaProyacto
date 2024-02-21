import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Logout = () => {
  return (
    <Button color="inherit" component={Link} to="/login">Cerrar Sesion</Button>
  )
}
