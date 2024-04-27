import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchSpells } from './fetchSpells.jsx'
import { SpellCard } from './components.jsx'
import './App.css'

export const App = () => {
  const { data, isLoading } = useQuery(['fetchSpells'], fetchSpells)
  return <> 
      <h1>Spells</h1>
      <div className="flex-container" >
        {!isLoading && data.results.map(spell => <SpellCard spell={spell} />)}
      </div>
    </>
  
}



