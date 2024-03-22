import { css } from "../../styled-system/css";

export function Playground({
  canvasRef,
}: {
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
}) {
  return (
    <section
      className={css({
        bg: "#333",
        w: "100%",
      })}
    >
      <canvas ref={canvasRef} />
    </section>
  );
}
