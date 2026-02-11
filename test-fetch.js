fetch("https://pokeapi.co/api/v2/location-area?limit=1").then(r => r.json()).then(console.log).catch(console.error)
