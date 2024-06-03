import Shape3D from "../../types/Shape3D";
import Tri from "../../types/Tri";
import Vec3D from "../../types/Vec3D";

export default function effect(
  input: Shape3D,
  modifier: Vec3D,
  effect: (input: Vec3D, modifier: Vec3D) => Vec3D
): Shape3D {
  return input.map(
    (vec) => vec.map((input) => effect(input, modifier)) as Tri<Vec3D>
  );
}
