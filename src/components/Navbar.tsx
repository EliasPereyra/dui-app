import Image from "next/image";
import { circle, stack } from "../../styled-system/patterns";

export function Navbar() {
  return (
    <nav
      className={stack({
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        bg: "linear-gradient(to right, #131417 0%, #06080C 100%)",
      })}
    >
      <div className={circle({ overflow: "hidden" })}>
        <Image
          src={"https://via.placeholder.com/150"}
          alt="Logo"
          width="50"
          height="50"
        />
      </div>
      <div id="tools">
        <div>1</div>
      </div>
      <div id="users"></div>
    </nav>
  );
}
