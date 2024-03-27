import { css } from "../../styled-system/css";
import { hstack, stack, vstack } from "../../styled-system/patterns";

import { input, select } from "./recipes";
import { fontFamilyOptions, fontSizeOptions } from "@/constants/constants";

const frameProportions = css({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  mt: "5",
});

export function RightSideBar() {
  return (
    <aside
      className={stack({
        display: "flex",
        flexDirection: "column",
        bg: "#B5B5B5",
        p: "2",
        color: "#222",
        w: "20em",
      })}
    >
      <div>
        <h3>Design</h3>
        <p>
          The canvas is your space of infinite ideas. Convert them into
          idesigns.
        </p>

        <div className={frameProportions}>
          <div className={css({ display: "flex", gap: "1rem" })}>
            <strong>W</strong>
            <p>1270</p>
          </div>
          <div className={css({ display: "flex", gap: "1rem" })}>
            <strong>H</strong>
            <p>1000</p>
          </div>
        </div>
      </div>

      <div
        className={stack({
          direction: "column",
          mt: "5",
        })}
      >
        <h3>Text</h3>
        <select className={select()}>
          {fontFamilyOptions.map((fontFamily) => (
            <option key={fontFamily.value} value={fontFamily.value}>
              {fontFamily.name}
            </option>
          ))}
        </select>
        <div
          className={hstack({
            gap: "10",
          })}
        >
          <select className={select()}>
            {fontSizeOptions.map((fontSize) => (
              <option key={fontSize.value} value={fontSize.value}>
                {fontSize.label}
              </option>
            ))}
          </select>
          <select className={select()}>
            <option>Normal</option>
          </select>
        </div>
      </div>

      <div className={stack({ mt: "4", direction: "column", gap: "2" })}>
        <h3>Color</h3>
        <div className={hstack({ gap: "2" })}>
          <input className={input()} type="color" />
          <label>#222</label>
          <label>100%</label>
        </div>
      </div>

      <div className={stack({ mt: "4", direction: "column", gap: "2" })}>
        <h3>Stroke</h3>
        <div className={hstack({ gap: "2" })}>
          <input className={input()} type="color" />
          <label>#222</label>
          <label>100%</label>
        </div>
      </div>

      <div className={stack({ mt: "4", direction: "column", gap: "2" })}>
        <h3>Export</h3>
        <button>Export to PDF</button>
      </div>
    </aside>
  );
}
