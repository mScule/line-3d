import Vec3D from "../../types/Vec3D";

export default function center(...points: Vec3D[]): Vec3D[] {
  return points.map(([x, y, z]) => [
    x + window.innerWidth * 0.5,
    y + window.innerHeight * 0.5,
    z,
  ]);
}
