import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchSpells } from './fetchSpells.jsx'
import './App.css'

export const App = () => {
  const { data, isLoading } = useQuery(['fetchSpells'], fetchSpells)

  return <> 
      <h1>Spells</h1>
      <div display="flex" className="card" >
        {isLoading ? 'there are not spells' : 'there are spells'}
      </div>
    </>
  
}



const SpellCard = ({spell}) => {
  return <p key={spell.slug}>{spell.name}</p>
}
