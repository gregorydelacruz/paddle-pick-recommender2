
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowLeft, ArrowRight } from "lucide-react";

type QuestionnaireData = {
  skillLevel: "beginner" | "intermediate" | "advanced";
  playingStyle: "defensive" | "offensive" | "balanced";
  paddleShape: "traditional" | "elongated" | "wide";
  spinImportance: "notImportant" | "somewhat" | "veryImportant";
  price: "budgetFriendly" | "midRange" | "premium";
  weight: "lightweight" | "medium" | "heavyweight";
  balance: "headHeavy" | "evenlyBalanced" | "handleHeavy";
  priority: "spin" | "power" | "control";
  materials: "polymerTextured" | "nomexSmooth" | "aluminumMixed";
};

const questions = [
  {
    id: "skillLevel",
    title: "What's your skill level?",
    description: "Select the option that best describes your experience level",
    options: [
      { value: "beginner", label: "Beginner", description: "New to pickleball or playing for less than 6 months" },
      { value: "intermediate", label: "Intermediate", description: "Playing regularly for 6 months to 2 years" },
      { value: "advanced", label: "Advanced", description: "Competitive player with 2+ years experience" },
    ],
  },
  {
    id: "playingStyle",
    title: "What's your playing style?",
    description: "Choose the style that best fits how you play",
    options: [
      { value: "defensive", label: "Defensive/Control", description: "Prioritize placement and precision" },
      { value: "offensive", label: "Offensive/Power", description: "Look for strong shots and fast-paced play" },
      { value: "balanced", label: "Balanced", description: "A mix of control and power" },
    ],
  },
  {
    id: "paddleShape",
    title: "Which paddle shape do you prefer?",
    description: "Select the shape that aligns with your playing style and comfort",
    options: [
      { value: "traditional", label: "Traditional/Classic", description: "A balanced shape offering good control and maneuverability" },
      { value: "elongated", label: "Elongated", description: "Provides greater reach and more power in strokes" },
      { value: "wide", label: "Wide/Oversized", description: "Offers a larger sweet spot for easier contact and enhanced control" },
    ],
  },
  {
    id: "spinImportance",
    title: "How important is spin to your game?",
    description: "Select the option that reflects your need for spin performance",
    options: [
      { value: "notImportant", label: "Not Important", description: "I rarely use spin in my shots" },
      { value: "somewhat", label: "Somewhat Important", description: "I use spin occasionally" },
      { value: "veryImportant", label: "Very Important", description: "I rely on spin as a key part of my strategy" },
    ],
  },
  {
    id: "price",
    title: "What is your budget for a paddle?",
    description: "Choose your price range",
    options: [
      { value: "budgetFriendly", label: "Budget-Friendly", description: "Under $50" },
      { value: "midRange", label: "Mid-Range", description: "$50–$100" },
      { value: "premium", label: "Premium", description: "Over $100" },
    ],
  },
  {
    id: "weight",
    title: "Which paddle weight do you prefer?",
    description: "Select the weight category that best suits your play",
    options: [
      { value: "lightweight", label: "Lightweight", description: "Easier maneuverability and faster reactions" },
      { value: "medium", label: "Medium", description: "A balanced feel with good control and power" },
      { value: "heavyweight", label: "Heavyweight", description: "More mass for powerful hits, but may reduce speed" },
    ],
  },
  {
    id: "balance",
    title: "What balance point suits your preference?",
    description: "Pick the balance style that feels best for your game",
    options: [
      { value: "headHeavy", label: "Head-Heavy", description: "More power in your shots" },
      { value: "evenlyBalanced", label: "Evenly Balanced", description: "A mix of power and control" },
      { value: "handleHeavy", label: "Handle-Heavy", description: "Better control and maneuverability" },
    ],
  },
  {
    id: "priority",
    title: "Which attribute do you prioritize most in a paddle?",
    description: "Focus on the key performance factor for your game",
    options: [
      { value: "spin", label: "Spin", description: "High Spin RPM and Spin Percentile" },
      { value: "power", label: "Power", description: "Greater serve and volley speed, high Firepower rating" },
      { value: "control", label: "Control", description: "Enhanced balance and precise handling" },
    ],
  },
  {
    id: "materials",
    title: "What core and surface materials appeal to you?",
    description: "Consider the construction for optimal performance and feel",
    options: [
      { value: "polymerTextured", label: "Polymer Core with Textured Surface", description: "Great for spin and control" },
      { value: "nomexSmooth", label: "Nomex Core with Smooth Surface", description: "Excellent for power and fast play" },
      { value: "aluminumMixed", label: "Aluminum Core with Mixed Surface", description: "Balanced performance characteristics" },
    ],
  },
];

const Questionnaire = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const existingPreferences = location.state?.preferences;

  const form = useForm<QuestionnaireData>({
    defaultValues: existingPreferences || {
      skillLevel: undefined,
      playingStyle: undefined,
      paddleShape: undefined,
      spinImportance: undefined,
      price: undefined,
      weight: undefined,
      balance: undefined,
      priority: undefined,
      materials: undefined,
    },
  });

  useEffect(() => {
    if (existingPreferences) {
      const answeredQuestions = Object.entries(existingPreferences)
        .filter(([_, value]) => value !== undefined)
        .length;
      setCurrentStep(answeredQuestions - 1);
    }
  }, [existingPreferences]);

  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;

  const onSubmit = (data: QuestionnaireData) => {
    if (isLastStep) {
      navigate("/results", { state: { preferences: data } });
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-background">
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <div className="w-full bg-secondary rounded-full h-2 mb-8">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">{currentQuestion.title}</h2>
                  <p className="text-muted-foreground">
                    {currentQuestion.description}
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name={currentQuestion.id as keyof QuestionnaireData}
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="space-y-3"
                        >
                          {currentQuestion.options.map((option) => (
                            <motion.div
                              key={option.value}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <label
                                className="flex items-center space-x-3 space-y-0 p-4 cursor-pointer rounded-lg border bg-card hover:bg-accent transition-colors"
                              >
                                <RadioGroupItem value={option.value} id={option.value} />
                                <div className="flex flex-col">
                                  <span className="text-sm font-medium leading-none text-foreground">
                                    {option.label}
                                  </span>
                                  <span className="text-sm text-muted-foreground">
                                    {option.description}
                                  </span>
                                </div>
                              </label>
                            </motion.div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className="w-[120px]"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button type="submit" className="w-[120px]">
                {isLastStep ? "Finish" : "Next"}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Questionnaire;
