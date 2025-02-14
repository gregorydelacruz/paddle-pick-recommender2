
import { Paddle, formatPrice, formatPercentile } from "@/types/paddle";

const rawData = [
  {
    Company: "Electrum",
    Paddle: "Model E Elite",
    CoreThickness: 16,
    Price: "$199.99",
    Shape: "Elongated",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Toray Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2091,
    SpinPercentile: "49%",
    Length: 16.5,
    Width: 7.5,
    HandleLength: 5.5,
    StaticWeight: 8.1,
    SwingWeight: 117.8,
    SwingWeightPercentile: "67%",
    TwistWeight: 6.2,
    TwistWeightPercentile: "41%",
    BalancePoint: 24.1,
    BalancePointPercentile: "61%",
    ServeSpeed: 55.9,
    PowerPercentile: "69%",
    PunchVolleySpeed: 35.2,
    PopPercentile: "51%",
    Firepower: 60
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
