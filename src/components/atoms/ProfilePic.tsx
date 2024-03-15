import Image from "next/image";
import { css } from "../../../styled-system/css";

export function ProfilePic({ name }: { name: string }) {
  return (
    <>
      <Image
        className={css({ borderRadius: "50%" })}
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
        alt={`Profile Pic of ${name}`}
        width={30}
        height={30}
      />
    </>
  );
}
