import Shape3D from "../../types/Shape3D";
import Vec3D from "../../types/Vec3D";
import Tri from "../../types/Tri";

export default function scale(input: Shape3D, [vX, vY, vZ]: Vec3D): Shape3D {
  return input.map(
    (tri) => tri.map(([x, y, z]) => [x * vX, y * vY, z * vZ]) as Tri<Vec3D>
  );
}
