import { useState } from 'react'
import RegisterForm from './components/RegisterForm'
import MusicTable from './components/MusicTable'
import SpotifyProfile from './components/SpotifyProfile'

function App() {
  const [musicdata, setMusicData] = useState([])
  const [selectedMusicData, setSelectedMusicData] = useState(null)
  


  return (
   <>
      <RegisterForm onSubmit={setMusicData} />
      <MusicTable/>
      <SpotifyProfile/>
   </> 
  )
}

export default App
