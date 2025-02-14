
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
          <p>Length: {paddle.Length} inches</p>
          <p>Width: {paddle.Width} inches</p>
          <p>Handle Length: {paddle.HandleLength} inches</p>
          <p>Static Weight: {paddle.StaticWeight} oz</p>
          <p>Shape: {paddle.Shape}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Construction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Manufacturing Process: {paddle.ManufacturingProcess}</p>
          <p>Surface Texture: {paddle.SurfaceTexture}</p>
          <p>Surface Material: {paddle.SurfaceMaterial}</p>
          <p>Core Material: {paddle.CoreMaterial}</p>
          <p>Core Thickness: {paddle.CoreThickness}mm</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Spin RPM: {paddle.SpinRPM} (Top {paddle.SpinPercentile}%)</p>
          <p>Swing Weight: {paddle.SwingWeight} (Top {paddle.SwingWeightPercentile}%)</p>
          <p>Twist Weight: {paddle.TwistWeight} (Top {paddle.TwistWeightPercentile}%)</p>
          <p>Balance Point: {paddle.BalancePoint} (Top {paddle.BalancePointPercentile}%)</p>
          <p>Serve Speed: {paddle.ServeSpeed} mph (Top {paddle.PowerPercentile}%)</p>
          <p>Punch Volley Speed: {paddle.PunchVolleySpeed} mph (Top {paddle.PopPercentile}%)</p>
          <p>Firepower Rating: {paddle.Firepower}</p>
        </CardContent>
      </Card>
    </div>
  );
};
