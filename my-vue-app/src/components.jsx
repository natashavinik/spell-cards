import "./App.css";
import { useState } from "react";

export const SpellCard = ({ spell }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="card" key={spell.slug}>
      <h3>{`${spell.name} (${spell.level})`}</h3>
      <p>{`Range: ${spell.range}`}</p>
      <p>{`Casting time: ${spell.casting_time}`}</p>
      <p>{`Components: ${spell.components}`}</p>
      <Button
        onClick={() => {
          setExpanded(!expanded);
        }}
        text={expanded ? "see less" : "see more"}
      />
      {expanded && <AddInfo spell={spell} />}
    </div>
  );
};

export const AddInfo = ({ spell }) => {
  return (
    <div>
      <p>{`Description: ${spell.desc}`}</p>
      <p>{`Concentration: ${spell.concentration}`}</p>
      <p>{`Ritual: ${spell.ritual}`}</p>
      <p>{`Classes: ${spell.dnd_class}`}</p>
      <p>{`Duration: ${spell.duration}`}</p>
    </div>
  );
};

// make accordion that will reveal additional detail - is this a separate guy on the spell card?
// new state for component regarding if it's expanded or collapsed
// a button that controls that state
// text on button to be variable depending on expanded or not (see more/ see less)
// additional detail display is contingent on that state

//add additional detail to card all of the time - description, concentration, ritual, classes, duration
//create state that reflects expanded/collapsed x
//create button whose text content varies w state x
//allow button to control state x
//allow state to control if info is visible or not x

// p2 instead of accordion, make a "see more" so that detail sidebar opens
// p3 (take home)

export const Button = ({ onClick, text }) => {
  return (
    <button type="button" className="styled-button" onClick={onClick}>
      {text}
    </button>
  );
};

export const DetailSidebar = ({ isOpen }) => {
  isOpen = true;
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>Sick sidebar bro</div>
  );
};
