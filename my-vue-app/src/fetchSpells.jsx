

export const fetchSpells = async () => {
    try {
      const response = await fetch('https://api.open5e.com/spells/');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      return result
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }