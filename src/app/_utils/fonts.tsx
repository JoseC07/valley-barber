// src/app/_utils/fonts.js

import { Great_Vibes, Bebas_Neue, Titillium_Web, Plus_Jakarta_Sans } from "next/font/google";

export const gv = Great_Vibes({
  weight: "400",
  subsets: ["latin"]
});

export const bn = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const font = Titillium_Web({
  weight: "700",
  subsets: ["latin"],
});

export const pjs = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ["latin"],
});