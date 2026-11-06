// build buffers for each hierarchy peice
const sphereSteps = 30;   // vSteps and uSteps for the planets 
const orbitSteps = 60;    // orbit steps

// texture mapping consts
const BUMP_MAPPING = 0;    
const NORMAL_MAPPING = 1; 
const NO_MAPPING = 2;     
const COLOR_MAPPING = 3;   
 
function buildScene(){

    // sun == root 
    const sunGif = loadGifTexture("textures/sun.gif"); // sun texture
    const sun = {
        data: SUN,
        sphere: makeShapeBuffers(makePlanet(displayRadius(SUN), sphereSteps, sphereSteps, SUN.color, 1, 1)),
        material: SUN_MATERIAL,
        texture: sunGif.texture,
        mapping: COLOR_MAPPING,
    };
 
    // each planet + orbit
    const planets = [];
    for(let i = 0; i < PLANETS.length; i++){
        const planet = PLANETS[i];

        const alt = (i % 2 === 0); // even / odd alt for apply bump mapping 
 
        planets.push({
            data: planet,
            sphere: makeShapeBuffers(makePlanet(displayRadius(planet), sphereSteps, sphereSteps, planet.color, 1, 1)),
            texture: loadTexture(planet.texture),
            orbit: makeShapeBuffers(makeOrbit(displayDistance(planet), orbitSteps), gl.LINE_LOOP),
            material: MATERIAL,
            mapping: alt ? BUMP_MAPPING : NORMAL_MAPPING,
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
 
