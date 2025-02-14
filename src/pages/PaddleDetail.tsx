
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import paddles from "@/data/paddles";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PaddleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const paddle = paddles.find(p => 
    `${p.Company}-${p.Paddle}`.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!paddle) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 py-12">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/all-paddles")}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Paddles
          </Button>
          <h1>Paddle not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/all-paddles")}
          className="mb-8 hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Paddles
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">{paddle.Paddle}</h1>
            <p className="text-xl text-muted-foreground">{paddle.Company}</p>
            <p className="text-2xl font-semibold">${paddle.Price}</p>
          </div>

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
        </motion.div>
      </div>
    </div>
  );
};

export default PaddleDetail;
