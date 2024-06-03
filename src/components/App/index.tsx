import { useCallback, useState } from "react";
import Canvas from "../Canvas";

import style from "./style.module.css";

import ControlPanel from "../ControlPanel";
import Button from "../Button";

import Vec3D from "../../types/Vec3D";

import center from "../../functions/Vec3D/center";
import scale from "../../functions/Vec3D/scale";
import drawLines from "../../functions/Vec3D/drawLines";
import flatten from "../../functions/Shape3D/flatten";
import toShape3D from "../../functions/obj/toShape3D";

import MONKEY_OBJ from "../../assets/monkey.obj?raw";
import ICOSPHERE_OBJ from "../../assets/icosphere.obj?raw";
import CYLINDER_OBJ from "../../assets/cylinder.obj?raw";
import CONE_OBJ from "../../assets/cone.obj?raw";
import TORUS_OBJ from "../../assets/torus.obj?raw";
import effect from "../../functions/Shape3D/effect";
import rotate from "../../functions/matrix/rotate";

const monkey = toShape3D(MONKEY_OBJ);
const icosphere = toShape3D(ICOSPHERE_OBJ);
const cylinder = toShape3D(CYLINDER_OBJ);
const cone = toShape3D(CONE_OBJ);
const torus = toShape3D(TORUS_OBJ);

const shapes = [
  { name: "Monkey", shape: monkey },
  { name: "Icosphere", shape: icosphere },
  { name: "Cylinder", shape: cylinder },
  { name: "Cone", shape: cone },
  { name: "Torus", shape: torus },
];

export default function App() {
  const [move, setMove] = useState<boolean>(false);
  const [pos, setPos] = useState<Vec3D>([0, 0, 0]);
  const [shape, setShape] = useState<number>(0);

  const nextShape = () => {
    setShape(shape === shapes.length - 1 ? 0 : shape + 1);
  };

  const previousShape = () => {
    setShape(shape === 0 ? shapes.length - 1 : shape - 1);
  };

  const onUpdate = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      drawLines(
        ctx,
        ...center(...scale(flatten(effect(shapes[shape].shape, [-pos[1], pos[0], 0], rotate)), [350, 350, 350]))
      );
    },
    [pos, shape]
  );

  return (
    <div
      className={style.app}
      onMouseDown={() => setMove(true)}
      onMouseUp={() => setMove(false)}
      onMouseLeave={() => setMove(false)}
      onMouseMove={(e) => {
        if (!move) return;
        const [x, y, z] = pos;
        setPos([
          x + (e.movementX / window.innerWidth) * 5,
          y + (e.movementY / window.innerHeight) * 5,
          z,
        ]);
      }}
    >
      <ControlPanel>
        <Button onClick={previousShape}>Previous</Button>
        <span>{shapes[shape].name}</span>
        <Button onClick={nextShape}>Next</Button>
      </ControlPanel>
      <Canvas onUpdate={onUpdate} />
    </div>
  );
}
