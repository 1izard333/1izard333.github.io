function makeSatelliteBody(color = [0.8, 0.8, 0.8]){
    const sat = makePrism(1, 1, 1, color);
    return {
        positions: new Float32Array(sat.positions),
        colors: new Float32Array(sat.colors),
        indices: new Uint16Array(sat.indices),
        normals: new Float32Array(sat.normals) 
    };
}

function makeSolarPanels(color = [0.1, 0.2, 0.8]){
    const panel = makePrism(1.5, 0.1, 0.5, color);
    return {
        positions: new Float32Array(panel.positions),
        colors: new Float32Array(panel.colors),
        indices: new Uint16Array(panel.indices),
        normals: new Float32Array(panel.normals) 
    };
}