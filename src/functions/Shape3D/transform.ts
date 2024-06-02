import Shape3D from "../../types/Shape3D";
import Vec3D from "../../types/Vec3D";
import Tri from "../../types/Tri";

export default function transform(
  input: Shape3D,
  [ix, iy, iz]: Vec3D
): Shape3D {
  return input.map(
    (tri) => tri.map(([x, y, z]) => [x + ix, y + iy, z + iz]) as Tri<Vec3D>
  );
}
