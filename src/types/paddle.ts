
export interface Paddle {
  Company: string;
  Paddle: string;
  Price: number;
  YearReleased: number | null;
  ApprovalBody: string;
  Shape: string;
  FaceMaterial: string;
  GritType: string;
  BuildStyle: string;
  PaddleType: string;
  CoreThickness: number;
  GripLength: number | null;
  GripSize: number | null;
  StaticWeight: number;
  SwingWeight: number;
  SwingWeightPercentile: number;
  TwistWeight: number;
  TwistWeightPercentile: number;
  BalancePoint: number;
  SpinRating: string;
  SpinRPM: number | null;
  Power: number | null;
  PowerPercentile: number | null;
  Pop: number | null;
  PopPercentile: number | null;
  FirepowerPercentile: number | null;
  Firepower: number | null;
  FirepowerTier: string;
}

export const generatePaddleSlug = (company: string, paddle: string): string => {
  return `${company}-${paddle}`.toLowerCase().replace(/\s+/g, '-');
};
