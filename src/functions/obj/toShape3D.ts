import Shape3D from "../../types/Shape3D";
import Vec3D from "../../types/Vec3D";

export default function toShape3D(input: string): Shape3D {
  const shape: Shape3D = [];

  const lines = input.split("\n");

  const vecs: Vec3D[] = [];

  for (const line of lines) {
    const [prefix, ...rest] = line.split(" ");

    switch (prefix) {
      case "v": {
        const [x, y, z] = rest;

        vecs.push([Number(x), Number(y), Number(z)]);
        break;
      }
      case "f": {
        const [p1, p2, p3] = rest;

        const [p1Ref] = p1.split("/");
        const [p2Ref] = p2.split("/");
        const [p3Ref] = p3.split("/");

        shape.push([
          vecs[Number(p1Ref) - 1],
          vecs[Number(p2Ref) - 1],
          vecs[Number(p3Ref) - 1],
        ]);
        break;
      }
      default:
        continue;
    }
  }

  return shape;
}
