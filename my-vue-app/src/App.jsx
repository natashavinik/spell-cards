import { useQuery } from '@tanstack/react-query'
import { fetchSpells } from './fetchSpells.jsx'
import { useState } from 'react'
import { DetailSidebar } from './components.jsx'
import './App.css'

export const App = () => {
  const { data, isLoading } = useQuery(['fetchSpells'], fetchSpells)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return <> 
      <h1>Spells</h1>
      <div className="flex-container" >
        { isLoading ? 'there are no spells' : 'there are spells'}
      </div>
      <DetailSidebar isOpen={isSidebarOpen} />
    </>
}