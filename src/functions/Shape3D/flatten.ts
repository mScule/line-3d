import Shape3D from "../../types/Shape3D";
import Vec3D from "../../types/Vec3D";

const Z_MIN = 3;

export default function flatten(input: Shape3D): Vec3D[] {
  const points: Vec3D[] = [];

  for (const triangle of input) {
    for (const [x, y, z] of triangle) {
      points.push([x / (z + Z_MIN), y / (z + Z_MIN), z + Z_MIN]);
    }
  }

  return points;
}
