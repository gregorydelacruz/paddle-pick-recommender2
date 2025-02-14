
import { Paddle, formatPrice, formatPercentile } from "@/types/paddle";

const rawData = [
  {
    Company: "Chorus",
    Paddle: "Shapeshifter",
    CoreThickness: 16,
    Price: "$189.99",
    Shape: "Hybrid",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "18K Toray Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2139,
    SpinPercentile: "60%",
    Length: 16.3,
    Width: 7.8,
    HandleLength: 5.3,
    StaticWeight: 8.1,
    SwingWeight: 116.7,
    SwingWeightPercentile: "61%",
    TwistWeight: 6.61,
    TwistWeightPercentile: "67%",
    BalancePoint: 24.1,
    BalancePointPercentile: "61%",
    ServeSpeed: 55.7,
    PowerPercentile: "63%",
    PunchVolleySpeed: 35.3,
    PopPercentile: "56%",
    Firepower: 59
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
