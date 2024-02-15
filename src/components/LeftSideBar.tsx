import { css } from "../../styled-system/css";

const styles = css({
  color: "#222",
  padding: "2rem",
  minWidth: "10em",
  backgroundColor: "#B5B5B5",
  height: "100vh",
});

export function LeftSideBar() {
  return (
    <aside className={styles}>
      <h3>Layers</h3>
    </aside>
  );
}
