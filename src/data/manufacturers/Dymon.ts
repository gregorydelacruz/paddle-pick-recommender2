
import { Paddle, formatPrice, formatPercentile } from "@/types/paddle";

const rawData = [
  {
    Company: "Dymon",
    Paddle: "Mayhem",
    CoreThickness: 16,
    Price: "$199.99",
    Shape: "Elongated",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Toray Carbon Fiber",
    CoreMaterial: "Kevlar honeycomb",
    SpinRPM: 2366,
    SpinPercentile: "96%",
    Length: 16.5,
    Width: 7.5,
    HandleLength: 4.25,
    StaticWeight: 7.8,
    SwingWeight: 110.6,
    SwingWeightPercentile: "30%",
    TwistWeight: 6.31,
    TwistWeightPercentile: "46%",
    BalancePoint: 23.8,
    BalancePointPercentile: "43%",
    ServeSpeed: 56.1,
    PowerPercentile: "74%",
    PunchVolleySpeed: 35.7,
    PopPercentile: "68%",
    Firepower: 71
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
