
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
  playingStyle: "control" | "power" | "balanced";
  price: "budget" | "midRange" | "premium";
  weight: "light" | "medium" | "heavy";
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
    title: "What's your preferred playing style?",
    description: "Choose the style that matches your approach to the game",
    options: [
      { value: "control", label: "Control", description: "Focus on placement and accuracy" },
      { value: "power", label: "Power", description: "Aggressive play with powerful shots" },
      { value: "balanced", label: "Balanced", description: "Mix of control and power" },
    ],
  },
  {
    id: "price",
    title: "What's your budget range?",
    description: "Select your preferred price range for a paddle",
    options: [
      { value: "budget", label: "Budget", description: "$50-$100" },
      { value: "midRange", label: "Mid-Range", description: "$100-$150" },
      { value: "premium", label: "Premium", description: "$150+" },
    ],
  },
  {
    id: "weight",
    title: "Preferred paddle weight?",
    description: "Choose your ideal paddle weight range",
    options: [
      { value: "light", label: "Light", description: "7.3-7.7 oz" },
      { value: "medium", label: "Medium", description: "7.8-8.2 oz" },
      { value: "heavy", label: "Heavy", description: "8.3+ oz" },
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
      price: undefined,
      weight: undefined,
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
