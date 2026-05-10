import LincolnSedan from "@/assets/lincoln-sedan.png";
import CadillacSedan from "@/assets/cadillac-sedan.png";
import ChevroletSUV from "@/assets/chevrolet-suv.png";
import CadillacEscalade from "@/assets/cadillac-escalade.png";
import MercedesCClass from "@/assets/mercedes-c-class.png";
import MercedesSClass from "@/assets/mercedes-s-class.png";
import BlackLimousine from "@/assets/black-limousine.png";
import SprinterVan from "@/assets/sprinter-van.png";
import HummerLimousine from "@/assets/hummer-limousine.png";
import CoachBus from "@/assets/coach-bus.png";
import WhiteStretchLimo from "@/assets/White-Stretch-Limo.webp";

export type Vehicle = {
  name: string;
  category: "Sedan" | "SUV" | "Limousine" | "Van" | "Bus";
  pax: number;
  bags: number;
  hourly: number;
  jfk: number;
  lga: number;
  ewr: number;
  baseRate: number;
  perMile: number;
  tour2: number;
  tour4: number;
  tour6: number;
  tour8: number;
  image: string;
  desc: string;
};

export const FLEET: Vehicle[] = [
  { name: "Lincoln Sedan",    category: "Sedan",     pax: 3,  bags: 3,  hourly: 69,  jfk: 85,  lga: 75,  ewr: 95,  baseRate: 65,  perMile: 3.5,  tour2: 160, tour4: 300,  tour6: 420,  tour8: 520,  image: LincolnSedan, desc: "Classic executive elegance for business and leisure" },
  { name: "Cadillac Sedan",   category: "Sedan",     pax: 3,  bags: 3,  hourly: 72,  jfk: 90,  lga: 80,  ewr: 100, baseRate: 70,  perMile: 3.75, tour2: 170, tour4: 320,  tour6: 440,  tour8: 550,  image: CadillacSedan, desc: "Refined comfort with prestige Cadillac quality" },
  { name: "Chevrolet SUV",    category: "SUV",       pax: 6,  bags: 6,  hourly: 89,  jfk: 110, lga: 95,  ewr: 120, baseRate: 85,  perMile: 4.5,  tour2: 210, tour4: 390,  tour6: 540,  tour8: 680,  image: ChevroletSUV, desc: "Spacious and powerful — perfect for groups and families" },
  { name: "Cadillac Escalade",category: "SUV",       pax: 6,  bags: 6,  hourly: 95,  jfk: 120, lga: 105, ewr: 130, baseRate: 95,  perMile: 5.0,  tour2: 230, tour4: 420,  tour6: 580,  tour8: 720,  image: CadillacEscalade, desc: "The ultimate luxury SUV — bold, spacious, commanding" },
  { name: "Mercedes C Class", category: "Sedan",     pax: 3,  bags: 3,  hourly: 99,  jfk: 115, lga: 100, ewr: 125, baseRate: 95,  perMile: 4.75, tour2: 240, tour4: 440,  tour6: 600,  tour8: 760,  image: MercedesCClass, desc: "German engineering meets luxury for executive travel" },
  { name: "Mercedes S Class", category: "Sedan",     pax: 3,  bags: 3,  hourly: 120, jfk: 145, lga: 130, ewr: 155, baseRate: 120, perMile: 5.5,  tour2: 290, tour4: 540,  tour6: 740,  tour8: 940,  image: MercedesSClass, desc: "The pinnacle of Mercedes luxury for VIP travel" },
  { name: "Black Limousine",  category: "Limousine", pax: 8,  bags: 6,  hourly: 130, jfk: 175, lga: 160, ewr: 190, baseRate: 140, perMile: 6.0,  tour2: 320, tour4: 580,  tour6: 800,  tour8: 1000, image: BlackLimousine, desc: "Classic stretch limo in sleek black — make a grand entrance" },
  { name: "White Stretch Limousine", category: "Limousine", pax: 7, bags: 6, hourly: 130, jfk: 175, lga: 160, ewr: 190, baseRate: 140, perMile: 6.0, tour2: 320, tour4: 580, tour6: 800, tour8: 1000, image: WhiteStretchLimo, desc: "Elegant white stretch limousine — ideal for weddings and special events" },
  { name: "Sprinter Van",     category: "Van",       pax: 14, bags: 12, hourly: 150, jfk: 210, lga: 190, ewr: 230, baseRate: 160, perMile: 7.0,  tour2: 380, tour4: 700,  tour6: 960,  tour8: 1200, image: SprinterVan, desc: "Executive van comfort for medium-sized groups" },
  { name: "Hummer Limousine", category: "Limousine", pax: 20, bags: 8,  hourly: 180, jfk: 280, lga: 260, ewr: 300, baseRate: 200, perMile: 8.0,  tour2: 460, tour4: 850,  tour6: 1160, tour8: 1440, image: HummerLimousine, desc: "The bold, unforgettable Hummer Limo for parties" },
  { name: "Coach Bus",        category: "Bus",       pax: 50, bags: 50, hourly: 350, jfk: 550, lga: 500, ewr: 600, baseRate: 400, perMile: 12.0, tour2: 850, tour4: 1600, tour6: 2200, tour8: 2800, image: CoachBus, desc: "Full-size luxury coach for large groups and corporate events" },
];

export const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
