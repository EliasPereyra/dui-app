export function Playground({
  canvasRef,
}: {
  canvasRef: React.MutableRefObject<HTMLCanvasElement>;
}) {
  return (
    <section>
      <canvas ref={canvasRef} />
    </section>
  );
}
