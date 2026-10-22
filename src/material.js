// making everything the same material now for simplicity
const MATERIAL = {
    ka: 0.3, kd: 0.85, ks: 0.5, shininess: 40, metallic: 0.0,
    emissive: 0.0, flat: false,
};
 
// for sun as it lights up
const SUN_MATERIAL = {
    ka: 0, kd: 0, ks: 0, shininess: 1, metallic: 0,
    emissive: 1.0, flat: false,
};

// for orbit lines,, dimmer glow
const ORBIT_MATERIAL = {
    ka: 0, kd: 0, ks: 0, shininess: 1, metallic: 0,
    emissive: 0.45, flat: false,
};