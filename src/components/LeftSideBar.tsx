import { css } from "../../styled-system/css";

const styles = css({
  color: "#222",
  p: "2",
  minWidth: "12em",
  backgroundColor: "#CDCCCC",
  height: "100vh",
});

export function LeftSideBar() {
  return (
    <aside className={styles}>
      <h3 className={css({ textStyle: "h3" })}>Layers</h3>
    </aside>
  );
}
