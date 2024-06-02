import Vec3D from "../../types/Vec3D";

export default function scale(input: Vec3D[], size: Vec3D): Vec3D[] {
  const [sizeX, sizeY, sizeZ] = size;

  return input.map(([x, y, z]) => [x * sizeX, y * sizeY, z * sizeZ]);
}
