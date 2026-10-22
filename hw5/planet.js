function makePlanet(r, vSteps, uSteps, color = [0.2, 0.4, 0.9]) {
    const positions = [];
    const colors = [];
    const indices = [];
    const normals = [];

    /* 
    phi -> 0 - pi
    loop through each step of v 
    v = ratio of place in total v steps by pi
    */
    for (let i = 0; i <= vSteps; i++) {
        const v = i * Math.PI / vSteps;
        const sinV = Math.sin(v);
        const cosV = Math.cos(v);

        /*
        theta -> 0 - 2pi
        */
        for (let j = 0; j <= uSteps; j++) {
            const u = j * 2 * Math.PI / uSteps;
            const sinU = Math.sin(u);
            const cosU = Math.cos(u);

            // convert from spherical to cartesian 
            const x = cosU * sinV;
            const y = cosV;
            const z = sinU * sinV;

            // multiply by the radius, r, and push verticies 
            positions.push(r * x, r * y, r * z);

            // normal vector is just center pointed to x, y, z --> nature of sphere
            normals.push(x, y, z);

            colors.push(color[0], color[1], color[2]);
        }

    }
    for (let i = 0; i < vSteps; i++) {
        for (let j = 0; j < uSteps; j++) {
            const k1 = (i * (uSteps + 1)) + j;
            const k2 = k1 + uSteps + 1;
            indices.push(k1, k2, k1 + 1); // upper left triangle
            indices.push(k2, k2 + 1, k1 + 1); // lower right triangle
        }
    }
    return {
        positions: new Float32Array(positions),
        colors: new Float32Array(colors),
        indices: new Uint16Array(indices),
        normals: new Float32Array(normals),
    };
}