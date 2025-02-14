import { Paddle, formatPrice, formatPercentile } from "@/types/paddle";

const rawData = [
  {
    Company: "Bread & Butter",
    Paddle: "Fat Boy",
    CoreThickness: 16,
    Price: "$189.99",
    Shape: "Wide Body",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "3K Kevlar-Carbon Fiber Weave",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2069,
    SpinPercentile: "45%",
    Length: 15.9,
    Width: 8.1,
    HandleLength: 5.3,
    StaticWeight: 8,
    SwingWeight: 107.8,
    SwingWeightPercentile: "20%",
    TwistWeight: 7.11,
    TwistWeightPercentile: "89%",
    BalancePoint: 23.5,
    BalancePointPercentile: "25%",
    ServeSpeed: 54.4,
    PowerPercentile: "28%",
    PunchVolleySpeed: 36.3,
    PopPercentile: "80%",
    Firepower: 54
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
