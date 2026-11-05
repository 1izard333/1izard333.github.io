function makePrism(width, height, length, color){
    const positions = [];
    const colors = [];
    const indicies = [];
    const normals = []; // for lighting 

    // for texture
    const tangents = [];
    const textureCoors = [];


    // define faces of the prism,, 6faces w/ 4 verticies
    // faces have a normals, n and then verticies, v
    // need to add bitangent, b variable 
    const faces = [{n: [0, 0, 1], b: [0, 1, 0], v:[[1, 1, 1],[-1, 1, 1],[-1, -1, 1],[1, -1, 1]]}, // front --> +z
                   {n: [0, 0, -1], b: [0, 1, 0], v:[[1, 1, -1],[-1, 1, -1],[-1, -1, -1],[1, -1, -1]]}, // back --> -z
                   {n: [0, 1, 0], b: [0, 0, -1], v:[[1, 1, 1],[-1, 1, 1],[-1, 1, -1],[1, 1, -1]]}, // top --> +y
                   {n: [0, -1, 0], b: [0, 0, 1], v:[[1, -1, 1],[-1, -1, 1],[-1, -1, -1],[1, -1, -1]]}, // bottom --> -y
                   {n: [-1, 0, 0], b: [0, 1, 0], v:[[-1, 1, 1],[-1, -1, 1],[-1, -1, -1],[-1, 1, -1]]}, // left --> -x
                   {n: [1, 0, 0], b: [0, 1, 0], v:[[1, 1, 1],[1, -1, 1],[1, -1, -1],[1, 1, -1]]}, // right --> +x
    ]

    for (let i = 0; i < faces.length; i++) {
        const face = faces[i];
        const pos_index = positions.length / 3;

        // tan = B X N --> N X T = B 
        const normal = face.n;
        const bitan = face.b;
        const tan = [b[1] * n[2] - b[2] * n[1],
                     b[2] * n[0] - b[0] * n[2],
                     b[0] * n[1] - b[1] * n[0]];

        for (let j = 0; j < 4; j++) {
            const corner = face.v[j];
            positions.push(corner[0] * (width / 2), corner[1] * (height / 2), corner[2] * (length / 2));
            normals.push(face.n[0], face.n[1], face.n[2]);
            colors.push(color[0], color[1], color[2]);
        }

        // need to account for the corners 
        

        indicies.push(pos_index, pos_index + 1, pos_index + 2,
                     pos_index, pos_index + 2, pos_index + 3);
    }
    return {
        positions: new Float32Array(positions),
        colors: new Float32Array(colors),
        indices: new Uint16Array(indicies),
        normals: new Float32Array(normals),
        tangents: new Float32Array(tangents),
        textureCoors: new Float32Array(textureCoors),
    };
}