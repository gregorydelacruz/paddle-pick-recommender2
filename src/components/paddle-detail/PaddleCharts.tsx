
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
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

  const reviewMetricsData = [
    { name: "Value", value: paddleReview?.productReview.valueRating || 0, color: "#8B5CF6" },
    { name: "Performance", value: paddleReview?.productReview.performanceRating || 0, color: "#D946EF" },
    { name: "Control", value: paddleReview?.productReview.controlRating || 0, color: "#2563EB" },
    { name: "Power", value: paddleReview?.productReview.powerRating || 0, color: "#10B981" },
  ];

  // Convert review metrics to the circular format
  const TOTAL_ANGLE = 360;
  const RATING_MAX = 5;
  const circularData = reviewMetricsData.map((metric, index) => ({
    name: metric.name,
    startAngle: (index * TOTAL_ANGLE) / reviewMetricsData.length,
    value: (metric.value / RATING_MAX) * (TOTAL_ANGLE / reviewMetricsData.length),
    color: metric.color,
    rating: metric.value,
  }));

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
          <div className="h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={circularData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  startAngle={90}
                  endAngle={-270}
                >
                  {circularData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color}
                      strokeWidth={0}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <p className="text-3xl font-bold">
                {((reviewMetricsData.reduce((acc, curr) => acc + curr.value, 0) / reviewMetricsData.length)).toFixed(1)}
              </p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="absolute inset-x-0 bottom-0">
              <div className="flex justify-center gap-4 flex-wrap">
                {reviewMetricsData.map((metric, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: metric.color }}
                    />
                    <span className="text-sm">
                      {metric.name}: {metric.value}/5
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
