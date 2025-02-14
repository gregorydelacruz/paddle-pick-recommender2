
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <span className="inline-block px-3 py-1 text-sm bg-accent text-primary rounded-full animate-fade-in">
            Find Your Perfect Paddle
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4">
            Discover Your Ideal
            <br />
            Pickleball Paddle
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions and we'll recommend the perfect paddle based on
            your playing style and preferences.
          </p>
          
          <Button
            onClick={() => navigate("/questionnaire")}
            className="mt-8 bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg group transition-all duration-300 ease-in-out"
          >
            Start Recommendation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Personalized Matching",
    description: "Get paddle recommendations tailored to your unique playing style and preferences.",
    icon: <motion.div className="w-6 h-6 text-primary">🎯</motion.div>,
  },
  {
    title: "Expert Insights",
    description: "Benefit from data-driven recommendations based on player experiences.",
    icon: <motion.div className="w-6 h-6 text-primary">💡</motion.div>,
  },
  {
    title: "Quick & Easy",
    description: "Find your perfect paddle in minutes with our simple questionnaire.",
    icon: <motion.div className="w-6 h-6 text-primary">⚡</motion.div>,
  },
];

export default Index;
