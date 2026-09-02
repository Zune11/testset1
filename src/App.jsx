import { useState } from 'react'
import { Typography, Box } from '@mui/material'
import RegisterForm from './components/RegisterForm'
import MusicTable from './components/MusicTable'
import SpotifyProfile from './components/SpotifyProfile'

function App() {
  

  return (
   <>
    <RegisterForm />
    <MusicTable />
    <SpotifyProfile />
   </>
  )
}

export default App
