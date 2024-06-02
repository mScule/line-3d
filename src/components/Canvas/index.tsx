import { useCallback, useEffect, useRef } from "react";

import style from "./style.module.css";

type Props = {
  onUpdate: (ctx: CanvasRenderingContext2D) => void;
};

export default function Canvas({ onUpdate }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  const updateCanvasSize = useCallback(() => {
    if (!ref.current) {
      return;
    }

    ref.current.width = window.innerWidth;
    ref.current.height = window.innerHeight;
  }, []);

  const updateCanvasContent = useCallback(() => {
    if (!ref.current) {
      return;
    }

    const ctx2d = ref.current.getContext("2d");

    if (!ctx2d) {
      return;
    }

    ctx2d.clearRect(0, 0, ref.current.width, ref.current.height);

    onUpdate(ctx2d);
  }, [onUpdate]);

  // On update
  useEffect(() => {
    updateCanvasContent();
  }, [onUpdate, updateCanvasContent]);

  // On window resize
  useEffect(() => {
    function listener() {
      updateCanvasSize();
      updateCanvasContent();
    }

    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [updateCanvasSize, updateCanvasContent]);

  return (
    <>
      <canvas
        className={style.canvas}
        width={window.innerWidth}
        height={window.innerHeight}
        ref={ref}
      />
    </>
  );
}
