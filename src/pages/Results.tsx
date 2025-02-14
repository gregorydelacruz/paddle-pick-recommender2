
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { getRecommendedPaddles } from "@/utils/paddleRecommendations";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const preferences = location.state?.preferences;
  
  if (!preferences) {
    navigate("/questionnaire");
    return null;
  }

  const recommendedPaddles = getRecommendedPaddles(preferences);

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Button
          variant="outline"
          onClick={() => navigate("/questionnaire")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Questionnaire
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Your Recommended Paddles</h1>
            <p className="text-muted-foreground">
              Based on your preferences, here are your top paddle matches
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {recommendedPaddles.map((paddle, index) => (
              <motion.div
                key={`${paddle.Company}-${paddle.Paddle}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{paddle.Paddle}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{paddle.Company}</p>
                  <div className="space-y-2 flex-grow">
                    <p><span className="font-medium">Price:</span> ${paddle.Price}</p>
                    <p><span className="font-medium">Weight:</span> {paddle.StaticWeight}oz</p>
                    <p><span className="font-medium">Shape:</span> {paddle.Shape}</p>
                    <p><span className="font-medium">Core:</span> {paddle.CoreThickness}mm</p>
                  </div>
                  <div className="mt-4 space-y-1">
                    <div className="text-sm">
                      <span className="font-medium">Power:</span> {paddle.PowerPercentile}%
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Spin:</span> {paddle.SpinPercentile}%
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Control:</span> {paddle.PopPercentile}%
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;
