
import { Paddle, formatPrice, formatPercentile } from "@/types/paddle";

const rawData = [
  {
    Company: "Core",
    Paddle: "Reaction Pro Elongated",
    CoreThickness: 16,
    Price: "$124.99",
    Shape: "Elongated",
    ManufacturingProcess: "Cold Layered",
    SurfaceTexture: "Peel Ply-Fine",
    SurfaceMaterial: "T700 Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 1863,
    SpinPercentile: "22%",
    Length: 16.5,
    Width: 7.4,
    HandleLength: 5.8,
    StaticWeight: 8.2,
    SwingWeight: 125.4,
    SwingWeightPercentile: "93%",
    TwistWeight: 6.03,
    TwistWeightPercentile: "29%",
    BalancePoint: 24.8,
    BalancePointPercentile: "94%",
    ServeSpeed: 54.4,
    PowerPercentile: "28%",
    PunchVolleySpeed: 33.9,
    PopPercentile: "15%",
    Firepower: 21
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
