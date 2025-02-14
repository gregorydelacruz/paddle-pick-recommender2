
import { Paddle, formatPrice, formatPercentile } from "@/types/paddle";

const paddlesRawData = [
  // ... First row as example, you'll need to add all rows
  {
    Company: "11Six24",
    Paddle: "Hurache Control",
    CoreThickness: 16,
    Price: "$79.99",
    Shape: "Elongated",
    ManufacturingProcess: "Cold Layered",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Toray Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2107,
    SpinPercentile: "52%",
    Length: 16.5,
    Width: 7.5,
    HandleLength: 5.5,
    StaticWeight: 7.4,
    SwingWeight: 106,
    SwingWeightPercentile: "11%",
    TwistWeight: 5.55,
    TwistWeightPercentile: "10%",
    BalancePoint: 23.7,
    BalancePointPercentile: "36%",
    ServeSpeed: 52.5,
    PowerPercentile: "6%",
    PunchVolleySpeed: 33.9,
    PopPercentile: "15%",
    Firepower: 10
  },
  // ... Add all other rows here
];

const paddles: Paddle[] = paddlesRawData.map(paddle => ({
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
