import Matrix from "../../types/Matrix";
import Vec3D from "../../types/Vec3D";

export default function multiply(
  [x, y, z]: Vec3D,
  matrix: Matrix
): Vec3D {
  const result: Vec3D = [
    x * matrix[0][0] + y * matrix[1][0] + z * matrix[2][0] + matrix[3][0],
    x * matrix[0][1] + y * matrix[1][1] + z * matrix[2][1] + matrix[3][1],
    x * matrix[0][2] + y * matrix[1][2] + z * matrix[2][2] + matrix[3][2],
  ];

  const w =
    x * matrix[0][3] + y * matrix[1][3] + z * matrix[2][3] + matrix[3][3];

  if (w !== 0) {
    const [x, y, z] = result;

    return [x / w, y / w, z / w];
  }

  return result;
}
