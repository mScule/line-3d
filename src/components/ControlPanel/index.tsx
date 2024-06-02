import { ReactNode } from "react";
import style from "./style.module.css";

type Props = {
  children: ReactNode;
};

export default function ControlPanel({ children }: Props) {
  return <div className={style.controlPanel}>{children}</div>;
}
