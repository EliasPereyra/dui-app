import { fabric } from "fabric";

export const initializeFabric = ({
  canvasRef,
  fabricRef,
}: {
  fabricRef: React.MutableRefObject<fabric.Canvas | null>;
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
}) => {
  const canvasElement = document.getElementById("canvas");

  const canvasFabric = new fabric.Canvas(canvasRef.current, {
    width: canvasElement?.clientWidth,
    height: canvasElement?.clientHeight,
  });

  fabricRef.current = canvasFabric;

  return canvasFabric;
};
