import { useQuery } from '@tanstack/react-query'
import { fetchSpells } from './fetchSpells.jsx'
import './App.css'

export const App = () => {
  const { data, isLoading } = useQuery(['fetchSpells'], fetchSpells)
  return <> 
      <h1>Spells</h1>
      <div className="flex-container" >
        { isLoading ? 'there are no spells' : 'there are spells'}
      </div>
    </>
}