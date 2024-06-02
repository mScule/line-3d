import Vec3D from "../../types/Vec3D";

export default function drawLines(
  ctx: CanvasRenderingContext2D,
  ...points: Vec3D[]
) {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  const [[x, y], ...rest] = points;
  ctx.beginPath();
  ctx.moveTo(x, y);

  for (const [x, y] of rest) {
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = "#FFFFFF";
  ctx.stroke();
}
