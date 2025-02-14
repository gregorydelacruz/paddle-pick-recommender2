
import { Paddle, formatPrice, formatPercentile } from "@/types/paddle";

const rawData = [
  {
    Company: "Body Helix",
    Paddle: "X4 Gold Kevlar",
    CoreThickness: 16,
    Price: "$140.00",
    Shape: "Hybrid",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Kevlar 3K Cloth",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2281,
    SpinPercentile: "86%",
    Length: 16.3,
    Width: 7.8,
    HandleLength: 5.4,
    StaticWeight: 8.1,
    SwingWeight: 115.9,
    SwingWeightPercentile: "56%",
    TwistWeight: 6.55,
    TwistWeightPercentile: "60%",
    BalancePoint: 24.1,
    BalancePointPercentile: "61%",
    ServeSpeed: 56.2,
    PowerPercentile: "77%",
    PunchVolleySpeed: 35.5,
    PopPercentile: "63%",
    Firepower: 70
  }
] as const;

const paddles: Paddle[] = rawData.map(paddle => ({
  ...paddle,
  Price: formatPrice(paddle.Price),
  SpinPercentile: formatPercentile(paddle.SpinPercentile),
  SwingWeightPercentile: formatPercentile(paddle.SwingWeightPercentile),
  TwistWeightPercentile: formatPercentile(paddle.TwistWeightPercentile),
  BalancePointPercentile: formatPercentile(paddle.BalancePointPercentile),
  PowerPercentile: formatPercentile(paddle.PowerPercentile),
  PopPercentile: formatPercentile(paddle.PopPercentile),
}));

export default paddles;
