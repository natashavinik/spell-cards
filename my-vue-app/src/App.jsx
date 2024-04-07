import { useState, useEffect } from 'react'
import './App.css'

export const App = () => {
  const [spells, setSpells] = useState('')

  useEffect(()=>{fetch('https://api.open5e.com/spells/').then(res => res.json()).then(res=>setSpells(res))
  }, [])
  return (
    <> 
      <h1>Spells</h1>
      <div display="flex" className="card" >
        { spells && spells.results.map((spell) => {return <SpellCard spell={spell} />})}
      </div>
    </>
  )
}

const SpellCard = (spell) => {
  return <p key={spell.spell.slug}>{spell.spell.name}</p>
}
