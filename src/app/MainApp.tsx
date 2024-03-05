"use client";

import { useEffect, useRef } from "react";
import { stack } from "../../styled-system/patterns";

import { LeftSideBar } from "@/components/LeftSideBar";
import { RightSideBar } from "@/components/RightSideBar";
import { initializeFabric } from "@/lib/canva";
import { Playground } from "@/components/Playground";

export function MainApp() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas>(null);

  useEffect(() => {
    const canvas = initializeFabric({
      canvasRef: canvasRef,
      fabricRef: fabricRef,
    });

    return () => {
      canvas.dispose();
    };
  }, [canvasRef]);

  return (
    <main
      className={stack({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      })}
    >
      <LeftSideBar />

      {/* Here the main canvas  */}
      <Playground canvasRef={canvasRef} />

      <RightSideBar />
    </main>
  );
}
