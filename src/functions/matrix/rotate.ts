import Matrix from "../../types/Matrix";
import Vec3D from "../../types/Vec3D";
import multiply from "./multiply";

const { sin, cos } = Math;

export default function rotate(vec: Vec3D, [x, y, z]: Vec3D): Vec3D {
  const rx: Matrix = [
    [1,      0,       0, 0],
    [0, cos(x), -sin(x), 0],
    [0, sin(x),  cos(x), 0],
    [0,      0,       0, 0],
  ];
  const ry: Matrix = [
    [ cos(y), 0, sin(y), 0],
    [      0, 1,      0, 0],
    [-sin(y), 0, cos(y), 0],
    [      0, 0,      0, 0],
  ];
  const rz: Matrix = [
    [cos(z), -sin(z), 0, 0],
    [sin(z),  cos(z), 0, 0],
    [     0,       0, 1, 0],
    [     0,       0, 0, 0],
  ];

  return multiply(multiply(multiply(vec, rx), ry), rz);
}
