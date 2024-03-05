import { css } from "../../styled-system/css";

const styles = css({
  color: "#222",
  padding: "2rem",
  minWidth: "10em",
  backgroundColor: "#CDCCCC",
  height: "100vh",
});

export function LeftSideBar() {
  return (
    <aside className={styles}>
      <h3>Layers</h3>
    </aside>
  );
}
