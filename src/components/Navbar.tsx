import Image from "next/image";
import { circle, stack } from "../../styled-system/patterns";
import { ProfilePic } from "./atoms/ProfilePic";
import { ShapesMenu } from "./ShapesMenu";

export function Navbar() {
  return (
    <nav
      className={stack({
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        bg: "linear-gradient(to right, #131417 0%, #06080C 100%)",
        padding: "",
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
        <ShapesMenu />
      </div>
      <div id="users">
        <ProfilePic name="elias" />
      </div>
    </nav>
  );
}
