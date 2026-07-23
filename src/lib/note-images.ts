import lemon from "@/assets/ingredients/lemon.jpg";
import eucalyptus from "@/assets/ingredients/eucalyptus.jpg";
import mint from "@/assets/ingredients/mint.jpg";
import pine from "@/assets/ingredients/pine.jpg";
import aloe from "@/assets/ingredients/aloe.jpg";
import lavender from "@/assets/ingredients/lavender.jpg";
import water from "@/assets/ingredients/water.jpg";
import lime from "@/assets/ingredients/lime.jpg";
import bubbles from "@/assets/ingredients/bubbles.jpg";
import orange from "@/assets/ingredients/orange.jpg";
import jasmine from "@/assets/ingredients/jasmine.jpg";
import cotton from "@/assets/ingredients/cotton.jpg";
import salt from "@/assets/ingredients/salt.jpg";
import tea from "@/assets/ingredients/tea.jpg";

const map: Record<string, string> = {
  lemon,
  eucalyptus,
  mint,
  pine,
  aloe,
  lavender,
  water,
  lime,
  bubbles,
  orange,
  jasmine,
  cotton,
  salt,
  tea,
};

/** Look up an ingredient image by display name; falls back to water. */
export function noteImage(name: string): string {
  const key = name.trim().toLowerCase();
  return map[key] ?? water;
}

export const rawMaterials = [
  { name: "Fresh Lemon", tag: "The bright note", image: lemon },
  { name: "Eucalyptus Oil", tag: "The pure lift", image: eucalyptus },
  { name: "Pine Extract", tag: "The deep clean", image: pine },
  { name: "Aloe Vera", tag: "The skin-kind touch", image: aloe },
  { name: "Purified Water", tag: "The foundation", image: water },
  { name: "Green Tea", tag: "The antioxidant", image: tea },
];
