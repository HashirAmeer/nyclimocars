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
  { name: "Lincoln Sedan",    category: "Sedan",     pax: 3,  bags: 3,  hourly: 69,  jfk: 132.74,  lga: 132.74,  ewr: 148.80, baseRate: 65,  perMile: 3.5,  tour2: 160, tour4: 300,  tour6: 420,  tour8: 520,  image: LincolnSedan, desc: "Best for: Corporate solo travel, airport transfers. Leather seating, climate control, and bottled water at every booking." },
  { name: "Cadillac Sedan",   category: "Sedan",     pax: 3,  bags: 3,  hourly: 72,  jfk: 152.86,  lga: 152.86,  ewr: 174.24, baseRate: 70,  perMile: 3.75, tour2: 170, tour4: 320,  tour6: 440,  tour8: 550,  image: CadillacSedan, desc: "Best for: Executive point-to-point, couple travel. A clean, pressed interior with premium Cadillac comfort." },
  { name: "Chevrolet SUV",    category: "SUV",       pax: 6,  bags: 6,  hourly: 89,  jfk: 180.04,  lga: 180.04,  ewr: 200.42, baseRate: 85,  perMile: 4.5,  tour2: 210, tour4: 390,  tour6: 540,  tour8: 680,  image: ChevroletSUV, desc: "Best for: Families and small groups. Spacious seating, massive cargo capacity, and privacy glass." },
  { name: "Cadillac Escalade",category: "SUV",       pax: 6,  bags: 6,  hourly: 95,  jfk: 200.42,  lga: 200.42,  ewr: 227.60, baseRate: 95,  perMile: 5.0,  tour2: 230, tour4: 420,  tour6: 580,  tour8: 720,  image: CadillacEscalade, desc: "Best for: VIP airport transfers and corporate groups. Commanding presence with Wi-Fi included." },
  { name: "Mercedes C Class", category: "Sedan",     pax: 3,  bags: 3,  hourly: 99,  jfk: 166.45,  lga: 166.45,  ewr: 195.00, baseRate: 95,  perMile: 4.75, tour2: 240, tour4: 440,  tour6: 600,  tour8: 760,  image: MercedesCClass, desc: "Best for: Executive travel and VIP clients. German engineering meets premium luxury." },
  { name: "Mercedes S Class", category: "Sedan",     pax: 3,  bags: 3,  hourly: 120, jfk: 220.80,  lga: 220.80,  ewr: 260.20, baseRate: 120, perMile: 5.5,  tour2: 290, tour4: 540,  tour6: 740,  tour8: 940,  image: MercedesSClass, desc: "Best for: The pinnacle of executive sedan travel. Ultimate comfort for discerning business travellers." },
  { name: "Black Limousine",  category: "Limousine", pax: 8,  bags: 6,  hourly: 130, jfk: 330.33,  lga: 330.33,  ewr: 390.66, baseRate: 140, perMile: 6.0,  tour2: 320, tour4: 580,  tour6: 800,  tour8: 1000, image: BlackLimousine, desc: "Best for: Weddings and special occasions. Custom interiors with lighting, built-in bar, and privacy partitions." },
  { name: "White Stretch Limousine", category: "Limousine", pax: 7, bags: 6, hourly: 130, jfk: 330.33,  lga: 330.33,  ewr: 390.66, baseRate: 140, perMile: 6.0, tour2: 320, tour4: 580, tour6: 800, tour8: 1000, image: WhiteStretchLimo, desc: "Best for: Bridal party coordination. Red-carpet deployment and champagne service included for weddings." },
  { name: "Sprinter Van",     category: "Van",       pax: 14, bags: 12, hourly: 150, jfk: 359.99,  lga: 359.99,  ewr: 399.62, baseRate: 160, perMile: 7.0,  tour2: 380, tour4: 700,  tour6: 960,  tour8: 1200, image: SprinterVan, desc: "Best for: Corporate groups and conference shuttles. Individual captain's chairs and climate control throughout." },
  { name: "Hummer Limousine", category: "Limousine", pax: 20, bags: 8,  hourly: 180, jfk: 811.90,  lga: 811.90,  ewr: 962.18, baseRate: 200, perMile: 8.0,  tour2: 460, tour4: 850,  tour6: 1160, tour8: 1440, image: HummerLimousine, desc: "Best for: Parties and large celebrations. The bold, statement-making vehicle for unforgettable events." },
  { name: "Coach Bus",        category: "Bus",       pax: 50, bags: 50, hourly: 350, jfk: 1375.80,  lga: 1375.80,  ewr: 1600.00, baseRate: 400, perMile: 12.0, tour2: 850, tour4: 1600, tour6: 2200, tour8: 2800, image: CoachBus, desc: "Best for: Large corporate events and wedding guest transfers. Cushioned seating and PA systems included." },
];

export const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
