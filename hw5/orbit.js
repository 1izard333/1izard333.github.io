// want to make a circle dashed line

// make circle path - skip sections so they aren't drawn

// equation for circle => (x-h)^2 + (y-k)^2 = r
// h = x center
// k = y center
// r = radius 

function makeOrbit(r, steps, color = [1, 1, 1]){
    const balckDash = [0, 0, 0];
    const positions = [];
    const colors = [];
    const indices = [];
    const normals = [];

    // go from 0 to 2pi -> full circle
    for(let i = 0; i < steps; i++){
        const v = i * 2 * Math.PI / steps;
        const sinV = Math.sin(v);
        const cosV = Math.cos(v);

        const x = cosV;
        const y = 0; // be flat and orbit y
        const z = sinV;

        positions.push(r * x, r * y, r * z);

        // push fake normal so passes in html file
        normals.push(0, 1, 0);

        // if i is odd 
        if(i % 2){
            colors.push(balckDash[0], balckDash[1], balckDash[2]);
        }else{
            colors.push(color[0], color[1], color[2]);
        }
    }

    for(let i = 0; i < steps; i++){
        indices.push(i);
    }

    return {
        positions: new Float32Array(positions),
        colors: new Float32Array(colors),
        indices: new Uint16Array(indices),
        normals: new Float32Array(normals),
    };
}