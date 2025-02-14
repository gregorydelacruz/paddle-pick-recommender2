
import { Paddle, formatPrice, formatPercentile } from "@/types/paddle";

const rawData = [
  {
    Company: "Bird",
    Paddle: "Ball Hawk Classic",
    CoreThickness: 14,
    Price: "$199.00",
    Shape: "Standard",
    ManufacturingProcess: "Cold Layered",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "T700 Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2099,
    SpinPercentile: "50%",
    Length: 16,
    Width: 8,
    HandleLength: 4.75,
    StaticWeight: 7.9,
    SwingWeight: 106,
    SwingWeightPercentile: "11%",
    TwistWeight: 7.05,
    TwistWeightPercentile: "86%",
    BalancePoint: 23.5,
    BalancePointPercentile: "25%",
    ServeSpeed: 51.3,
    PowerPercentile: "1%",
    PunchVolleySpeed: 32.4,
    PopPercentile: "3%",
    Firepower: 2
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
