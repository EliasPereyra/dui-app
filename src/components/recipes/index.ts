import { cva } from "../../../styled-system/css";

export const select = cva({
  base: {
    border: "none",
    borderRadius: "4",
    p: "2",
  },
});

export const input = cva({
  base: {
    border: "none",
    borderRadius: "4",
  },
});

export const theme = {
  tokens: {
    fontSizes: {
      sm: { value: ".7rem" },
      md: { value: "1.2rem" },
      lg: { value: "1.5rem" },
    },
  },
};
