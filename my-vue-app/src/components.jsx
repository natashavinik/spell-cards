import './App.css'

export const SpellCard = ({spell}) => {
  return <div className="card" key={spell.slug}>
    <h3>{`${spell.name} (${spell.level})`}</h3>
    <p>{`Range: ${spell.range}`}</p>
    <p>{`Casting time: ${spell.casting_time}`}</p>
    <p>{`Components: ${spell.components}`}</p>
  </div>
}

export const Button = ({onClick, text}) => {
  return <button
    type="button"
    className="styled-button"
    onClick={onClick}>
      {text}
  </button>
}

export const DetailSidebar = ( {isOpen} ) => {
  isOpen = false
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      Sick sidebar bro
    </div>
  )
}
  