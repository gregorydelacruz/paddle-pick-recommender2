
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Paddle } from "@/types/paddle";

interface PaddleSpecificationsProps {
  paddle: Paddle;
}

export const PaddleSpecifications = ({ paddle }: PaddleSpecificationsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Physical Specifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {paddle.GripLength && <p>Grip Length: {paddle.GripLength} inches</p>}
          {paddle.GripSize && <p>Grip Size: {paddle.GripSize} inches</p>}
          <p>Weight: {paddle.StaticWeight} oz</p>
          <p>Shape: {paddle.Shape}</p>
          <p>Core Thickness: {paddle.CoreThickness}mm</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Construction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Build Style: {paddle.BuildStyle}</p>
          <p>Grit Type: {paddle.GritType}</p>
          {paddle.FaceMaterial && <p>Face Material: {paddle.FaceMaterial}</p>}
          {paddle.PaddleType && <p>Paddle Type: {paddle.PaddleType}</p>}
          {paddle.ApprovalBody && <p>Approval: {paddle.ApprovalBody}</p>}
          {paddle.YearReleased && <p>Year Released: {paddle.YearReleased}</p>}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {paddle.SpinRPM != null && <p>Spin: {paddle.SpinRPM} RPM ({paddle.SpinRating})</p>}
          <p>Swing Weight: {paddle.SwingWeight} (Top {paddle.SwingWeightPercentile}%)</p>
          <p>Twist Weight: {paddle.TwistWeight} (Top {paddle.TwistWeightPercentile}%)</p>
          <p>Balance Point: {paddle.BalancePoint}mm</p>
          {paddle.Power != null && <p>Power: {paddle.Power} mph (Top {paddle.PowerPercentile}%)</p>}
          {paddle.Pop != null && <p>Pop: {paddle.Pop} mph (Top {paddle.PopPercentile}%)</p>}
          {paddle.Firepower != null && <p>Firepower: {paddle.Firepower} ({paddle.FirepowerTier})</p>}
        </CardContent>
      </Card>
    </div>
  );
};
