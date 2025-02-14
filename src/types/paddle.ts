
export interface Paddle {
  Company: string;
  Paddle: string;
  CoreThickness: number;
  Price: number;
  Shape: "Elongated" | "Wide Body" | "Standard" | "Hybrid";
  ManufacturingProcess: string;
  SurfaceTexture: string;
  SurfaceMaterial: string;
  CoreMaterial: string;
  SpinRPM: number;
  SpinPercentile: number;
  Length: number;
  Width: number;
  HandleLength: number;
  StaticWeight: number;
  SwingWeight: number;
  SwingWeightPercentile: number;
  TwistWeight: number;
  TwistWeightPercentile: number;
  BalancePoint: number;
  BalancePointPercentile: number;
  ServeSpeed: number;
  PowerPercentile: number;
  PunchVolleySpeed: number;
  PopPercentile: number;
  Firepower: number;
}

export const formatPrice = (priceStr: string): number => {
  return parseFloat(priceStr.replace('$', ''));
};

export const formatPercentile = (percentStr: string): number => {
  return parseFloat(percentStr.replace('%', ''));
};
