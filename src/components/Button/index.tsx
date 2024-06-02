import { HTMLAttributes } from "react";
import style from "./style.module.css";

type Props = HTMLAttributes<HTMLButtonElement>;

export default function Button({ className, children, ...rest }: Props) {
  return (
    <button className={`${style.button} ${className}`} {...rest}>
      {children}
    </button>
  );
}
