export type Vehicle = {
  name: string;
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
};

export const FLEET: Vehicle[] = [
  { name: "Lincoln Sedan",    pax: 3,  bags: 3,  hourly: 69,  jfk: 85,  lga: 75,  ewr: 95,  baseRate: 65,  perMile: 3.5,  tour2: 160, tour4: 300,  tour6: 420,  tour8: 520,  image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&q=80" },
  { name: "Cadillac Sedan",   pax: 3,  bags: 3,  hourly: 72,  jfk: 90,  lga: 80,  ewr: 100, baseRate: 70,  perMile: 3.75, tour2: 170, tour4: 320,  tour6: 440,  tour8: 550,  image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=80" },
  { name: "Chevrolet SUV",    pax: 6,  bags: 6,  hourly: 89,  jfk: 110, lga: 95,  ewr: 120, baseRate: 85,  perMile: 4.5,  tour2: 210, tour4: 390,  tour6: 540,  tour8: 680,  image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=80" },
  { name: "Cadillac Escalade",pax: 6,  bags: 6,  hourly: 95,  jfk: 120, lga: 105, ewr: 130, baseRate: 95,  perMile: 5.0,  tour2: 230, tour4: 420,  tour6: 580,  tour8: 720,  image: "https://images.unsplash.com/photo-1519440009760-83d65eb12cc1?w=900&q=80" },
  { name: "Mercedes C Class", pax: 3,  bags: 3,  hourly: 99,  jfk: 115, lga: 100, ewr: 125, baseRate: 95,  perMile: 4.75, tour2: 240, tour4: 440,  tour6: 600,  tour8: 760,  image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=900&q=80" },
  { name: "Mercedes S Class", pax: 3,  bags: 3,  hourly: 120, jfk: 145, lga: 130, ewr: 155, baseRate: 120, perMile: 5.5,  tour2: 290, tour4: 540,  tour6: 740,  tour8: 940,  image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=900&q=80" },
  { name: "Black Limousine",  pax: 8,  bags: 8,  hourly: 130, jfk: 175, lga: 160, ewr: 190, baseRate: 140, perMile: 6.0,  tour2: 320, tour4: 580,  tour6: 800,  tour8: 1000, image: "https://images.unsplash.com/photo-1561361398-a8a4b8c8e3aa?w=900&q=80" },
  { name: "White Limousine",  pax: 8,  bags: 8,  hourly: 130, jfk: 175, lga: 160, ewr: 190, baseRate: 140, perMile: 6.0,  tour2: 320, tour4: 580,  tour6: 800,  tour8: 1000, image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&q=80" },
  { name: "Sprinter Van",     pax: 14, bags: 14, hourly: 150, jfk: 210, lga: 190, ewr: 230, baseRate: 160, perMile: 7.0,  tour2: 380, tour4: 700,  tour6: 960,  tour8: 1200, image: "https://images.unsplash.com/photo-1609520505218-7421df17ad8b?w=900&q=80" },
  { name: "Hummer Limousine", pax: 20, bags: 20, hourly: 180, jfk: 280, lga: 260, ewr: 300, baseRate: 200, perMile: 8.0,  tour2: 460, tour4: 850,  tour6: 1160, tour8: 1440, image: "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=900&q=80" },
  { name: "Party Bus",        pax: 24, bags: 24, hourly: 220, jfk: 380, lga: 350, ewr: 420, baseRate: 280, perMile: 9.5,  tour2: 560, tour4: 1040, tour6: 1400, tour8: 1760, image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=80" },
  { name: "Coach Bus",        pax: 50, bags: 50, hourly: 350, jfk: 550, lga: 500, ewr: 600, baseRate: 400, perMile: 12.0, tour2: 850, tour4: 1600, tour6: 2200, tour8: 2800, image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=900&q=80" },
];

export const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
