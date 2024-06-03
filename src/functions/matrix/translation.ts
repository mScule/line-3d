import Vec3D from "../../types/Vec3D";

const translation = ([x, y, z]: Vec3D) => [
    [1, 0, 0, x],
    [0, 1, 0, y],
    [0, 0, 1, z],
    [0, 0, 0, 1]
];

export default translation;
