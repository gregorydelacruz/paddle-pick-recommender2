
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const features = [
    {
      title: "Personalized Recommendations",
      description: "Get paddle suggestions tailored to your playing style and preferences",
      icon: "🎯",
    },
    {
      title: "Detailed Comparisons",
      description: "Compare paddle specifications, materials, and performance metrics",
      icon: "📊",
    },
    {
      title: "Expert Insights",
      description: "Benefit from data-driven recommendations based on real player feedback",
      icon: "🧠",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Hero Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Find Your Perfect Pickleball Paddle
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our intelligent recommendation system helps you discover the ideal paddle
              that matches your playing style and preferences.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/questionnaire")}
              className="group text-lg"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Features Section */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                    <CardContent className="p-6 text-center space-y-4">
                      <span className="text-4xl">{feature.icon}</span>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl p-8 space-y-6"
          >
            <h2 className="text-3xl font-bold">Ready to Find Your Perfect Paddle?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Answer a few questions about your playing style and preferences, and we'll
              recommend the best paddles for you.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/questionnaire")}
              className="group"
            >
              Take the Questionnaire
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
