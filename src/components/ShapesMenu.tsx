"use client";

import Image from "next/image";
import { stack } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import { createCircle } from "@/lib/canva";

export function ShapesMenu() {
  return (
    <div
      className={stack({
        direction: "vertical",
        gap: "5",
        padding: "2",
        alignItems: "center",
      })}
    >
      <Image
        src="/assets/icons/line.svg"
        alt="Line"
        width={30}
        height={30}
        className={css({
          stroke: "slate.400",
          _hover: {
            boxShadow: "0 0 10px #333",
          },
        })}
      />
      <Image
        src="/assets/icons/circle.svg"
        alt="Circle"
        width={30}
        height={30}
        className={css({ stroke: "slate.400" })}
        onClick={createCircle}
      />
      <Image
        src="/assets/icons/square.svg"
        alt="Square"
        width={30}
        height={30}
        className={css({ stroke: "slate.400" })}
      />
      <Image
        src="/assets/icons/rectangle.svg"
        alt="Rectangle"
        width={30}
        height={30}
        className={css({ stroke: "slate.400" })}
      />
    </div>
  );
}
