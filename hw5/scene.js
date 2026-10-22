// build buffers for each hierarchy peice
const sphereSteps = 30;   // vSteps and uSteps for the planets 
const orbitSteps = 60;    // orbit steps
 
function buildScene(){
    // sun == root 
    const sun = {
        data: SUN,
        sphere: makeShapeBuffers(makePlanet(displayRadius(SUN), sphereSteps, sphereSteps, SUN.color)),
        material: SUN_MATERIAL
    };
 
    // each planet + orbit
    const planets = [];
    for(let i = 0; i < PLANETS.length; i++){
        const planet = PLANETS[i];
 
        planets.push({
            data: planet,
            sphere: makeShapeBuffers(makePlanet(displayRadius(planet), sphereSteps, sphereSteps, planet.color)),
            orbit: makeShapeBuffers(makeOrbit(displayDistance(planet), orbitSteps), gl.LINE_LOOP),
            material: MATERIAL,
        });
    }
 
    // make satellite
    const satBody = makeShapeBuffers(makeSatelliteBody());
    const satPanel = makeShapeBuffers(makeSolarPanels());

    // materials for orbit & sat
    const orbitMaterial = ORBIT_MATERIAL;
    const satBodyMaterial = MATERIAL;
    const satPanelMaterial = MATERIAL;
 
    // return data structures 
    return {sun, planets, satBody, satPanel, orbitMaterial, satBodyMaterial, satPanelMaterial };
}
 
