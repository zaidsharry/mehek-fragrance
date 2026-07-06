import bergamot from "@/assets/notes/bergamot.jpg";
import rose from "@/assets/notes/rose.jpg";
import oud from "@/assets/notes/oud.jpg";
import saffron from "@/assets/notes/saffron.jpg";
import leather from "@/assets/notes/leather.jpg";
import blackcurrant from "@/assets/notes/blackcurrant.jpg";
import praline from "@/assets/notes/praline.jpg";
import musk from "@/assets/notes/musk.jpg";
import mandarin from "@/assets/notes/mandarin.jpg";
import vetiver from "@/assets/notes/vetiver.jpg";
import iris from "@/assets/notes/iris.jpg";
import cedar from "@/assets/notes/cedar.jpg";
import tobacco from "@/assets/notes/tobacco.jpg";
import smoke from "@/assets/notes/smoke.jpg";
import vanilla from "@/assets/notes/vanilla.jpg";
import orangeBlossom from "@/assets/notes/orange-blossom.jpg";
import honey from "@/assets/notes/honey.jpg";
import neroli from "@/assets/notes/neroli.jpg";
import ambergris from "@/assets/notes/ambergris.jpg";
import sandalwood from "@/assets/notes/sandalwood.jpg";
import amber from "@/assets/notes/amber.jpg";
import benzoin from "@/assets/notes/benzoin.jpg";
import tonka from "@/assets/notes/tonka.jpg";
import peony from "@/assets/notes/peony.jpg";
import pear from "@/assets/notes/pear.jpg";
import cassis from "@/assets/notes/cassis.jpg";
import blackRose from "@/assets/notes/black-rose.jpg";
import starAnise from "@/assets/notes/star-anise.jpg";

const map: Record<string, string> = {
  bergamot,
  rose,
  oud,
  saffron,
  leather,
  blackcurrant,
  praline,
  musk,
  mandarin,
  vetiver,
  iris,
  cedar,
  tobacco,
  smoke,
  vanilla,
  "orange blossom": orangeBlossom,
  honey,
  neroli,
  ambergris,
  sandalwood,
  amber,
  benzoin,
  tonka,
  peony,
  pear,
  cassis,
  "black rose": blackRose,
  "star anise": starAnise,
};

/** Look up a note image by display name; falls back to rose if unknown. */
export function noteImage(name: string): string {
  const key = name.trim().toLowerCase();
  return map[key] ?? rose;
}

export const rawMaterials = [
  { name: "Bergamot", tag: "The first breath", image: bergamot },
  { name: "Bulgarian Rose", tag: "The velvet heart", image: rose },
  { name: "Cambodian Oud", tag: "The dark spine", image: oud },
  { name: "Mysore Sandalwood", tag: "The soft residue", image: sandalwood },
  { name: "Madagascan Vanilla", tag: "The warmth", image: vanilla },
  { name: "Ambergris", tag: "The signature trail", image: ambergris },
];
