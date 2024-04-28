# Coding challenge (front end) - Spell cards

Welcome to the front end coding challenge! In this exercise you will turn data from the [Open5E API](https://open5e.com/) into a convenient way for Dungeons and Dragons players to browse their spells.

Magic users in Dungeons and Dragons can cast a variety of spells, and each spell has different effects, potency, and casting requirements. You are going to create a single page webapp with React to transform this data into easy to read cards displaying the information on each spell.

### Setup

`npm run dev`

## Part 1 - Create the spell cards

Open the `App.jsx` file. This is where the content you see on the page is defined. Part 1 of this exercise is to add the spell cards. Each card should display:
- name
- level (how powerful it is and thus how demanding it is to cast)
- range (how far away a player can cast it)
- casting time (how long it takes to cast)
- components (other requirements to cast the spell, represented by any combination of the letters V for verbal, S for somatic, and M for material)

## Part 2 - Give the spell cards additional detail

We want players to be able to get into the nitty gritty of the Rules As Written of their spells. Give players the ability to see additional details about their spells one by one when they need to. They need to know:
- description (the effects of the spell)
- duration (how long the spell is in effect once it has been cast)
- concentration (whether or not the spell requires sustained focus to maintain)
- ritual (whether or not the spell can be cast for 'free' if the caster spends extra time casting it)
- classes (which type(s) of casters this spell is available to)

Choose one of the following options:

### Part 2a - Give the spell cards an accordion

Add a new feature to your spell cards: an accordion containing the necessary additional detail. It should be able to expand and collapse.

### Part 2b - Add spell detail to the sidebar

Add a new feature to your spell cards: a way to open and close the sidebar and inject it with the necessary additional detail.

## Part 3 - Take home project

There's a whole lot more you could do with this to make players happy. Implement two of the following features, one smaller and one larger, to the spell cards and create your own Github repo with a `README` detailing your strategy and explaining your decisions. You have two days. Email Kat and Grace a link to your repo on Github when it's done.

Smaller features:
- Add whichever expanded spell detail feature you didn't choose in part 2
- Use react-query to get the data instead of `.then` NOTE
- Add sorting buttons so the user can toggle between sorting by spell level and sorting alphabetically by name

Larger features:
- Since the data is paginated already, add page browsing
- Add tabs so the player can browse spells by class or level
    NOTE: The full set of caster classes is Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Warlock, and Wizard. Spells range in level from cantrip (sometimes thought of as level 0) to 1 through 9, with potency increasing as level increases.
- Add a "known spells" section to the page that users can add spells to and remove spells from. It does not have to persist with a refresh.