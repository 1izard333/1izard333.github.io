// stored data need for the sun and planets
// data from these websites 
// https://rgbcolorpicker.com/0-1
// https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html
// https://solarsystem.nasa.gov/planet-compare/

const SUN = { name: "Sun", radiusKm: 695700, color: [0.949, 0.686, 0.169] };
 
const PLANETS = [
    { name: "Mercury", radiusKm: 2439.7,  distanceKm: 57909227,   color: [0.651, 0.557, 0.380], orbitPeriod: 88 },
    { name: "Venus",   radiusKm: 6051.8,  distanceKm: 108209475,  color: [0.922, 0.651, 0.545], orbitPeriod: 224.7 },
    { name: "Earth",   radiusKm: 6371.0,  distanceKm: 149598262,  color: [0.404, 0.804, 0.890], orbitPeriod: 365.2 },
    { name: "Mars",    radiusKm: 3389.5,  distanceKm: 227943824,  color: [0.812, 0.176, 0.114], orbitPeriod: 687 },
    { name: "Jupiter", radiusKm: 69911,   distanceKm: 778340821,  color: [0.878, 0.875, 0.761], orbitPeriod: 4331 },
    { name: "Saturn",  radiusKm: 58232,   distanceKm: 1426666422, color: [0.902, 0.882, 0.604], orbitPeriod: 10747 },
    { name: "Uranus",  radiusKm: 25362,   distanceKm: 2870658186, color: [0.443, 0.694, 0.780], orbitPeriod: 30589 },
    { name: "Neptune", radiusKm: 24622,   distanceKm: 4498396441, color: [0.196, 0.376, 0.439], orbitPeriod: 59800 },
];