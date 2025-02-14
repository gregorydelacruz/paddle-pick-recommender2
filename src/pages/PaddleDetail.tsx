
import { useParams, useNavigate, useEffect } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import paddles from "@/data/paddles";
import reviews from "@/data/reviews";
import { PaddleCharts } from "@/components/paddle-detail/PaddleCharts";
import { PaddleSpecifications } from "@/components/paddle-detail/PaddleSpecifications";
import { PaddleReview } from "@/components/paddle-detail/PaddleReview";

const PaddleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const paddle = paddles.find(p => 
    `${p.Company}-${p.Paddle}`.toLowerCase().replace(/\s+/g, '-') === slug
  );

  const paddleReview = reviews[slug || ""];

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
            <div className="flex justify-center gap-4 mt-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => window.open("#", "_blank")}
                className="px-8"
              >
                Buy Now
              </Button>
            </div>
          </div>

          <PaddleCharts paddle={paddle} paddleReview={paddleReview} />
          
          <PaddleSpecifications paddle={paddle} />

          <Separator className="my-8" />

          <PaddleReview review={paddleReview} />
        </motion.div>
      </div>
    </div>
  );
};

export default PaddleDetail;
