import { Paddle, formatPrice, formatPercentile } from "@/types/paddle";

const rawData = [
  {
    Company: "Cheetah",
    Paddle: "Predion E16 Edgeless",
    CoreThickness: 16,
    Price: "$200.00",
    Shape: "Elongated",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Grit",
    SurfaceMaterial: "3K Woven Carbon Fiber",
    CoreMaterial: "Aramid Fiber Honeycomb",
    SpinRPM: 1556,
    SpinPercentile: "8%",
    Length: 16.5,
    Width: 7.5,
    HandleLength: 5.5,
    StaticWeight: 7.7,
    SwingWeight: 106,
    SwingWeightPercentile: "11%",
    TwistWeight: 5.37,
    TwistWeightPercentile: "7%",
    BalancePoint: 23.3,
    BalancePointPercentile: "18%",
    ServeSpeed: 52.8,
    PowerPercentile: "10%",
    PunchVolleySpeed: 34.3,
    PopPercentile: "23%",
    Firepower: 17
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
