<lov-code>
import { Paddle, formatPrice, formatPercentile } from "@/types/paddle";

const paddlesRawData = [
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
  {
    Company: "11Six24",
    Paddle: "Hurache-X Control",
    CoreThickness: 16,
    Price: "$139.99",
    Shape: "Elongated",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Toray Carbon Fiber and Kevlar",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 1847,
    SpinPercentile: "19%",
    Length: 16.5,
    Width: 7.5,
    HandleLength: 6,
    StaticWeight: 8.2,
    SwingWeight: 119,
    SwingWeightPercentile: "71%",
    TwistWeight: 6.4,
    TwistWeightPercentile: "51%",
    BalancePoint: 24.1,
    BalancePointPercentile: "61%",
    ServeSpeed: 55.3,
    PowerPercentile: "50%",
    PunchVolleySpeed: 35,
    PopPercentile: "44%",
    Firepower: 47
  },
  {
    Company: "11Six24",
    Paddle: "Hurache-X Control+",
    CoreThickness: 14,
    Price: "$139.99",
    Shape: "Elongated",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Toray Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2203,
    SpinPercentile: "73%",
    Length: 16.5,
    Width: 7.5,
    HandleLength: 6,
    StaticWeight: 8.2,
    SwingWeight: 115.4,
    SwingWeightPercentile: "53%",
    TwistWeight: 6.15,
    TwistWeightPercentile: "36%",
    BalancePoint: 23.9,
    BalancePointPercentile: "50%",
    ServeSpeed: 55.6,
    PowerPercentile: "57%",
    PunchVolleySpeed: 36.1,
    PopPercentile: "77%",
    Firepower: 67
  },
  {
    Company: "11Six24",
    Paddle: "Hurache-X Control+",
    CoreThickness: 16,
    Price: "$149.90",
    Shape: "Elongated",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Toray Carbon Fiber and Fiberglass",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 1956,
    SpinPercentile: "29%",
    Length: 16.5,
    Width: 7.5,
    HandleLength: 6,
    StaticWeight: 8,
    SwingWeight: 117.4,
    SwingWeightPercentile: "66%",
    TwistWeight: 6.3,
    TwistWeightPercentile: "45%",
    BalancePoint: 24.2,
    BalancePointPercentile: "67%",
    ServeSpeed: 55.5,
    PowerPercentile: "55%",
    PunchVolleySpeed: 35.4,
    PopPercentile: "59%",
    Firepower: 57
  },
  {
    Company: "11Six24",
    Paddle: "Monarch All Court",
    CoreThickness: 16,
    Price: "$139.99",
    Shape: "Wide Body",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Toray Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2131,
    SpinPercentile: "59%",
    Length: 15.8,
    Width: 8.2,
    HandleLength: 5.75,
    StaticWeight: 8.2,
    SwingWeight: 111.2,
    SwingWeightPercentile: "31%",
    TwistWeight: 7.36,
    TwistWeightPercentile: "96%",
    BalancePoint: 23.6,
    BalancePointPercentile: "31%",
    ServeSpeed: 56.2,
    PowerPercentile: "77%",
    PunchVolleySpeed: 34.8,
    PopPercentile: "37%",
    Firepower: 57
  },
  {
    Company: "11Six24",
    Paddle: "Monarch Control",
    CoreThickness: 16,
    Price: "$149.99",
    Shape: "Wide Body",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Kevlar 3K Cloth",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2051,
    SpinPercentile: "42%",
    Length: 15.8,
    Width: 8.2,
    HandleLength: 5.75,
    StaticWeight: 8.2,
    SwingWeight: 110.2,
    SwingWeightPercentile: "29%",
    TwistWeight: 7.37,
    TwistWeightPercentile: "96%",
    BalancePoint: 23.4,
    BalancePointPercentile: "21%",
    ServeSpeed: 55.3,
    PowerPercentile: "50%",
    PunchVolleySpeed: 35.1,
    PopPercentile: "48%",
    Firepower: 49
  },
  {
    Company: "11Six24",
    Paddle: "Monarch Jelly Bean",
    CoreThickness: 16,
    Price: "$99.99",
    Shape: "Wide Body",
    ManufacturingProcess: "Cold Layered with Edge Foam",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Toray Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2209,
    SpinPercentile: "75%",
    Length: 15.8,
    Width: 8.2,
    HandleLength: 5.75,
    StaticWeight: 7.9,
    SwingWeight: 107.2,
    SwingWeightPercentile: "18%",
    TwistWeight: 7.09,
    TwistWeightPercentile: "87%",
    BalancePoint: 23.7,
    BalancePointPercentile: "36%",
    ServeSpeed: 53.7,
    PowerPercentile: "19%",
    PunchVolleySpeed: 33.6,
    PopPercentile: "10%",
    Firepower: 15
  },
  {
    Company: "Ace",
    Paddle: "Heart",
    CoreThickness: 14,
    Price: "$189.99",
    Shape: "Elongated",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "T700 Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2260,
    SpinPercentile: "81%",
    Length: 16.5,
    Width: 7.5,
    HandleLength: 5.5,
    StaticWeight: 7.8,
    SwingWeight: 115.7,
    SwingWeightPercentile: "55%",
    TwistWeight: 5.8,
    TwistWeightPercentile: "20%",
    BalancePoint: 24.3,
    BalancePointPercentile: "73%",
    ServeSpeed: 55.6,
    PowerPercentile: "57%",
    PunchVolleySpeed: 34.6,
    PopPercentile: "30%",
    Firepower: 43
  },
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
  },
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
  },
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
  },
  {
    Company: "Bread & Butter",
    Paddle: "Filth",
    CoreThickness: 16,
    Price: "$165.00",
    Shape: "Elongated",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "T700 Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 1865,
    SpinPercentile: "23%",
    Length: 16.5,
    Width: 7.4,
    HandleLength: 5.5,
    StaticWeight: 7.9,
    SwingWeight: 121,
    SwingWeightPercentile: "79%",
    TwistWeight: 6.2,
    TwistWeightPercentile: "41%",
    BalancePoint: 24.2,
    BalancePointPercentile: "67%",
    ServeSpeed: 55.2,
    PowerPercentile: "49%",
    PunchVolleySpeed: 35.6,
    PopPercentile: "66%",
    Firepower: 57
  },
  {
    Company: "Bread & Butter",
    Paddle: "Loco",
    CoreThickness: 16,
    Price: "$165.00",
    Shape: "Hybrid",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "T700 Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2091,
    SpinPercentile: "49%",
    Length: 16.3,
    Width: 7.7,
    HandleLength: 5.3,
    StaticWeight: 7.7,
    SwingWeight: 113.7,
    SwingWeightPercentile: "42%",
    TwistWeight: 6.1,
    TwistWeightPercentile: "31%",
    BalancePoint: 24.1,
    BalancePointPercentile: "61%",
    ServeSpeed: 54.6,
    PowerPercentile: "32%",
    PunchVolleySpeed: 35.2,
    PopPercentile: "51%",
    Firepower: 42
  },
  {
    Company: "Bread & Butter",
    Paddle: "Shogun",
    CoreThickness: 16,
    Price: "$189.99",
    Shape: "Elongated",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Carbon Fiber & PET Fibers (\"Titanium\")",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2004,
    SpinPercentile: "36%",
    Length: 16.5,
    Width: 7.4,
    HandleLength: 5.5,
    StaticWeight: 8.2,
    SwingWeight: 121.6,
    SwingWeightPercentile: "83%",
    TwistWeight: 6.13,
    TwistWeightPercentile: "34%",
    BalancePoint: 24.5,
    BalancePointPercentile: "80%",
    ServeSpeed: 55,
    PowerPercentile: "42%",
    PunchVolleySpeed: 34.6,
    PopPercentile: "30%",
    Firepower: 36
  },
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
  },
  {
    Company: "Cheetah",
    Paddle: "Predion E16-with lead tape",
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
    StaticWeight: 8.4,
    SwingWeight: 115,
    SwingWeightPercentile: "49%",
    TwistWeight: 7.23,
    TwistWeightPercentile: "92%",
    BalancePoint: 23.5,
    BalancePointPercentile: "25%",
    ServeSpeed: 54.1,
    PowerPercentile: "23%",
    PunchVolleySpeed: 34.3,
    PopPercentile: "23%",
    Firepower: 23
  },
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
  },
  {
    Company: "Chorus",
    Paddle: "Shapeshifter with 5 grams tungsten tape",
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
    StaticWeight: 8.4,
    SwingWeight: 117.8,
    SwingWeightPercentile: "67%",
    TwistWeight: 7,
    TwistWeightPercentile: "84%",
    BalancePoint: 23.7,
    BalancePointPercentile: "36%",
    ServeSpeed: 55.9,
    PowerPercentile: "69%",
    PunchVolleySpeed: 35.2,
    PopPercentile: "51%",
    Firepower: 60
  },
  {
    Company: "Chorus",
    Paddle: "Shapeshifter with 5 grams tungsten tape & 28-gram Slyce cap",
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
    StaticWeight: 9.3,
    SwingWeight: 121.3,
    SwingWeightPercentile: "82%",
    TwistWeight: 7.11,
    TwistWeightPercentile: "89%",
    BalancePoint: 21.8,
    BalancePointPercentile: "2%",
    ServeSpeed: 56,
    PowerPercentile: "71%",
    PunchVolleySpeed: 35.7,
    PopPercentile: "68%",
    Firepower: 70
  },
  {
    Company: "Chorus",
    Paddle: "Supercourt",
    CoreThickness: 16,
    Price: "$119.99",
    Shape: "Standard",
    ManufacturingProcess: "Cold Layered",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2033,
    SpinPercentile: "40%",
    Length: 16,
    Width: 8,
    HandleLength: 6.25,
    StaticWeight: 8,
    SwingWeight: 107,
    SwingWeightPercentile: "16%",
    TwistWeight: 6,
    TwistWeightPercentile: "27%",
    BalancePoint: 23.1,
    BalancePointPercentile: "11%",
    ServeSpeed: 55.9,
    PowerPercentile: "69%",
    PunchVolleySpeed: 34.7,
    PopPercentile: "34%",
    Firepower: 51
  },
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
  },
  {
    Company: "Core",
    Paddle: "Reaction Pro Standard",
    CoreThickness: 16,
    Price: "$124.99",
    Shape: "Standard",
    ManufacturingProcess: "Cold Layered",
    SurfaceTexture: "Peel Ply-Fine",
    SurfaceMaterial: "T700 Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 1892,
    SpinPercentile: "25%",
    Length: 15.8,
    Width: 8,
    HandleLength: 5.13,
    StaticWeight: 8.2,
    SwingWeight: 111.7,
    SwingWeightPercentile: "35%",
    TwistWeight: 7.25,
    TwistWeightPercentile: "93%",
    BalancePoint: 23.8,
    BalancePointPercentile: "43%",
    ServeSpeed: 53.5,
    PowerPercentile: "17%",
    PunchVolleySpeed: 34,
    PopPercentile: "16%",
    Firepower: 16
  },
  {
    Company: "CRBN",
    Paddle: "CRBN 1X",
    CoreThickness: 14,
    Price: "$229.99",
    Shape: "Elongated",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Toray Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 2244,
    SpinPercentile: "80%",
    Length: 16.5,
    Width: 7.3,
    HandleLength: 5.5,
    StaticWeight: 8,
    SwingWeight: 116,
    SwingWeightPercentile: "56%",
    TwistWeight: 5.78,
    TwistWeightPercentile: "20%",
    BalancePoint: 24.2,
    BalancePointPercentile: "67%",
    ServeSpeed: 54.7,
    PowerPercentile: "35%",
    PunchVolleySpeed: 34.4,
    PopPercentile: "25%",
    Firepower: 30
  },
  {
    Company: "CRBN",
    Paddle: "CRBN 2X",
    CoreThickness: 16,
    Price: "$229.99",
    Shape: "Standard",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Peel Ply-Coarse",
    SurfaceMaterial: "Toray Carbon Fiber",
    CoreMaterial: "Polypropylene Honeycomb",
    SpinRPM: 1975,
    SpinPercentile: "32%",
    Length: 15.8,
    Width: 8,
    HandleLength: 4.75,
    StaticWeight: 8,
    SwingWeight: 110,
    SwingWeightPercentile: "27%",
    TwistWeight: 7.5,
    TwistWeightPercentile: "99%",
    BalancePoint: 23.5,
    BalancePointPercentile: "25%",
    ServeSpeed: 53.5,
    PowerPercentile: "17%",
    PunchVolleySpeed: 34.4,
    PopPercentile: "25%",
    Firepower: 21
  },
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
  },
  {
    Company: "Diadem",
    Paddle: "Hush",
    CoreThickness: 18,
    Price: "$189.95",
    Shape: "Elongated",
    ManufacturingProcess: "Thermoformed",
    SurfaceTexture: "Textured polyurethane",
    SurfaceMaterial: "Thermoplastic Polyurethane",
    CoreMaterial: "Carbon fiber frame with BASF materials",
    SpinRPM: 2776,
    SpinPercentile: "100%",
    Length: 16.5,
    Width: 7.2,
    HandleLength: 5.6,
    StaticWeight: 8.3,
    SwingWeight: 122.7,
    SwingWeightPercentile: "90%",
    TwistWeight: 5.13,
    TwistWeightPercentile: "2%",
    BalancePoint: 24.5,
    BalancePointPercentile: "80%",
    ServeSpeed: 62,
    PowerPercentile: "100%",
    PunchVolleySpeed: 38.3,
    PopPercentile: "99%",
    Firepower: 100
  },
  {
    Company: "Diadem",
    Paddle: "Icon V2 XL",
    CoreThickness: 13.7,
    Price: "$199.95",
    Shape: "Standard",
    ManufacturingProcess: "Hot Molded",
    SurfaceTexture: "Grit",
    SurfaceMaterial: "Carbon Fiber (Japanese-Sourced)",
    CoreMaterial: "Polypropylene Honeycomb (2 sheets)",
    SpinRPM: 1718,
    SpinPercentile: "12%",
    Length: 16,
    Width: 7.6,
    HandleLength: 5.25,
    StaticWeight: 8.2,
    SwingWeight: 125,
    SwingWeightPercentile: "92%",
    TwistWeight: 5.69,
    TwistWeightPercentile: "13%",
    BalancePoint: 24.5,
    BalancePointPercentile: "80%",
    ServeSpeed: 54.2,
    PowerPercentile: "24%",
    PunchVolleySpeed: 35,
    PopPercentile: "44%",
    Firepower: 34
  },
  {
    Company: "Diadem",
    Paddle: "Warrior",
    CoreThickness: 19,
    Price: "$229.95",
    Shape: "Elongated",
    ManufacturingProcess: "Cold Layered",
    SurfaceTexture: "Grit",
    SurfaceMaterial: "Carbon Fiber",
    CoreMaterial: "Polypropylene + Aramid",
    SpinRPM: 1744,
    SpinPercentile: "13%",
    Length: 16.4,
    Width: 7.4,
    HandleLength: 5.3,
    StaticWeight: 8.6,
    SwingWeight: 133,
    SwingWeightPercentile: "100%",
    TwistWeight: 7.25,
    TwistWeightPercentile: "93%",
    BalancePoint: 24.7,
    BalancePointPercentile: "91%",
    ServeSpeed: 52.6,
    PowerPercentile: "7%",
    PunchVolleySpeed: 31,
    PopPercentile: "0%",
    Firepower: 4
  },
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
  },
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
    SpinRPM:
