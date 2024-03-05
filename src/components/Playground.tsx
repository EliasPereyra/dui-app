export function Playground({
  canvasRef,
}: {
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
}) {
  return (
    <section>
      <canvas ref={canvasRef} />
    </section>
  );
}
