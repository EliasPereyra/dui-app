import React from "react";
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

export const handleCanvasMouseDown = ({
  options,
  canvas,
  selectedShapeRef,
  isDrawing,
  shapeRef,
}: {
  options: fabric.IEvent;
  canvas: fabric.Canvas;
  selectedShapeRef: any;
  isDrawing: React.MutableRefObject<boolean>;
  shapeRef: React.MutableRefObject<fabric.Object | null>;
}) => {
  const pointer = canvas.getPointer(options.e);

  const target = canvas.findTarget(options.e, false);

  canvas.isDrawingMode = false;

  if (selectedShapeRef.current === "freeform") {
    isDrawing.current = true;
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 5;
    return;
  }

  canvas.isDrawingMode = false;

  if (
    target &&
    (target.type === selectedShapeRef.current ||
      target.type === "activeSelection")
  ) {
    isDrawing.current = false;

    canvas.setActiveObject(target);

    target.setCoords();
  } else {
    isDrawing.current = true;
  }
};
