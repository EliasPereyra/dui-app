import { css } from "../../styled-system/css";
import { stack } from "../../styled-system/patterns";

const frameProportions = css({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export function RightSideBar() {
  return (
    <aside
      className={stack({
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#B5B5B5",
        padding: "2rem",
        color: "#222",
        width: "20em",
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
            <strong>w</strong>
            <p>1270</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
