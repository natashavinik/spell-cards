import './App.css'

export const SpellCard = ({spell}) => {
    return <div className="card" key={spell.slug}>
      <h3>{`${spell.name} (${spell.level})`}</h3>
      <p>{`Range: ${spell.range}`}</p>
      <p>{`Casting time: ${spell.casting_time}`}</p>
      <p>{`Components: ${spell.components}`}</p>
    </div>
  }