
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import paddles from "@/data/paddles";

const Manufacturers = () => {
  const navigate = useNavigate();
  const manufacturers = Array.from(new Set(paddles.map(paddle => paddle.Company)));

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

        <h1 className="text-3xl font-bold mb-8">Paddle Manufacturers</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manufacturers.map((manufacturer, index) => (
            <motion.div
              key={manufacturer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Button
                variant="outline"
                className="w-full p-6 h-auto text-left flex flex-col items-start gap-2 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30"
                onClick={() => navigate(`/all-paddles?manufacturer=${manufacturer}`)}
              >
                <h3 className="text-xl font-semibold">{manufacturer}</h3>
                <p className="text-muted-foreground">
                  {paddles.filter(p => p.Company === manufacturer).length} paddles
                </p>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manufacturers;
