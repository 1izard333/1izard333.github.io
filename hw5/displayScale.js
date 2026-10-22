
// convert planet data to be more display and readablility friendly 
const distanceConst = 35;   // toggle if needed
const sunRadius = 2.5;  // make the sun bigger than the normalized Jupiter planet
 
// normalize based on max distance
function findMaxDistance(){
    let maxDistance = 0;
    for(let i = 0; i < PLANETS.length; i++){
        if(PLANETS[i].distanceKm > maxDistance){
            maxDistance = PLANETS[i].distanceKm;
        }
    }
    return maxDistance;
}
 
// normalize based on max radius
function findMaxRadius(){
    let maxRadius = 0;
    for(let i = 0; i < PLANETS.length; i++){
        if(PLANETS[i].radiusKm > maxRadius){
            maxRadius = PLANETS[i].radiusKm;
        }
    }
    return maxRadius;
}
 
const maxDistance = findMaxDistance();
const maxRadius = findMaxRadius();
 
// distance from sun displayed, normalize from furthest planet and compress to fit in screen
function displayDistance(planet){
    const normalizedDistance = planet.distanceKm / maxDistance;
    return Math.sqrt(normalizedDistance) * distanceConst;
}
 
// planet radius displayed -- planets normalized to lasrgest planet jupiter
function displayRadius(planet){
    if(planet === SUN){
        return sunRadius;
    }
    const normalizedRadius = planet.radiusKm / maxRadius;
    return Math.sqrt(normalizedRadius);
}
 
