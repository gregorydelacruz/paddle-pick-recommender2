
import { Paddle, formatPrice, formatPercentile } from "@/types/paddle";

const rawData = [
  {
    Company: "Diadem",
    Paddle: "Edge 18K",
    CoreThickness: 16,
    Price: "$229.95",
    Shape: "Elongated",
    ManufacturingProcess: "Cold Layered",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "18k Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2304,
    SpinPercentile: "88%",
    Length: 16.4,
    Width: 7.5,
    HandleLength: 5.3,
    StaticWeight: 7.9,
    SwingWeight: 122,
    SwingWeightPercentile: "84%",
    TwistWeight: 6.25,
    TwistWeightPercentile: "44%",
    BalancePoint: 24.1,
    BalancePointPercentile: "61%",
    ServeSpeed: 53,
    PowerPercentile: "13%",
    PunchVolleySpeed: 34.1,
    PopPercentile: "17%",
    Firepower: 15
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
