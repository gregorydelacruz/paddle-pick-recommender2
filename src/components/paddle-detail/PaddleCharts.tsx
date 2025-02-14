
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Paddle } from "@/types/paddle";
import { Review } from "@/types/review";

interface PaddleChartsProps {
  paddle: Paddle;
  paddleReview?: Review;
}

export const PaddleCharts = ({ paddle, paddleReview }: PaddleChartsProps) => {
  const performanceData = [
    { metric: "Power", value: paddle.PowerPercentile },
    { metric: "Spin", value: paddle.SpinPercentile },
    { metric: "Control", value: paddle.TwistWeightPercentile },
    { metric: "Maneuverability", value: 100 - paddle.SwingWeightPercentile },
    { metric: "Balance", value: paddle.BalancePointPercentile },
  ];

  const metricsData = [
    { metric: "Value", value: paddleReview?.productReview.valueRating * 20 || 0 },
    { metric: "Performance", value: paddleReview?.productReview.performanceRating * 20 || 0 },
    { metric: "Control", value: paddleReview?.productReview.controlRating * 20 || 0 },
    { metric: "Power", value: paddleReview?.productReview.powerRating * 20 || 0 },
    { metric: "Overall", value: (
      ((paddleReview?.productReview.valueRating || 0) +
      (paddleReview?.productReview.performanceRating || 0) +
      (paddleReview?.productReview.controlRating || 0) +
      (paddleReview?.productReview.powerRating || 0)) / 4 * 20
    )},
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Performance Characteristics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={performanceData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar
                  name="Performance"
                  dataKey="value"
                  stroke="#8B5CF6"
                  fill="#8B5CF6"
                  fillOpacity={0.5}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Review Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={metricsData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar
                  name="Ratings"
                  dataKey="value"
                  stroke="#D946EF"
                  fill="#D946EF"
                  fillOpacity={0.5}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
