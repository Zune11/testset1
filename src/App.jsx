import { useState } from 'react'
import RegisterForm from './components/RegisterForm'
import MusicTable from './components/MusicTable'
import SpotifyProfile from './components/SpotifyProfile'

function App() {
  const [musicdata, setMusicData] = useState([])
  const [selectedMusicData, setSelectedMusicData] = useState(null)
  
  const handleMusicSubmit = (data) => {
    setMusicData((prev) => [...prev, data]);
  };


  return (
   <>
      <RegisterForm onSubmit={handleMusicSubmit} />
      <MusicTable data={musicdata} onRowClick={setSelectedMusicData} />
      <SpotifyProfile />
   </> 
  )
}

export default App
