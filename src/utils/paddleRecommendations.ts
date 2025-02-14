
import { Paddle } from "@/types/paddle";
import paddlesData from "@/data/paddles";

type UserPreferences = {
  skillLevel: "beginner" | "intermediate" | "advanced";
  playingStyle: "control" | "power" | "balanced";
  price: "budget" | "midRange" | "premium";
  weight: "light" | "medium" | "heavy";
};

const getPriceRange = (price: string): [number, number] => {
  switch (price) {
    case "budget":
      return [0, 100];
    case "midRange":
      return [100, 150];
    case "premium":
      return [150, Infinity];
    default:
      return [0, Infinity];
  }
};

const getWeightRange = (weight: string): [number, number] => {
  switch (weight) {
    case "light":
      return [0, 7.7];
    case "medium":
      return [7.8, 8.2];
    case "heavy":
      return [8.3, Infinity];
    default:
      return [0, Infinity];
  }
};

const scorePlayingStyle = (paddle: Paddle, style: string): number => {
  switch (style) {
    case "control":
      return (paddle.SpinPercentile + (100 - paddle.PowerPercentile)) / 2;
    case "power":
      return (paddle.PowerPercentile + paddle.Firepower) / 2;
    case "balanced":
      return (paddle.SpinPercentile + paddle.PowerPercentile + paddle.PopPercentile) / 3;
    default:
      return 0;
  }
};

const getRecommendedPaddles = (preferences: UserPreferences): Paddle[] => {
  const [minPrice, maxPrice] = getPriceRange(preferences.price);
  const [minWeight, maxWeight] = getWeightRange(preferences.weight);

  // Filter paddles based on price and weight ranges
  const filteredPaddles = paddlesData.filter(paddle => 
    paddle.Price >= minPrice &&
    paddle.Price <= maxPrice &&
    paddle.StaticWeight >= minWeight &&
    paddle.StaticWeight <= maxWeight
  );

  // Score paddles based on playing style
  const scoredPaddles = filteredPaddles.map(paddle => ({
    paddle,
    score: scorePlayingStyle(paddle, preferences.playingStyle)
  }));

  // Sort by score and return top 3 recommendations
  return scoredPaddles
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.paddle);
};

export { getRecommendedPaddles };
