
import { Paddle } from "@/types/paddle";
import paddlesData from "@/data/paddles";

type UserPreferences = {
  skillLevel: "beginner" | "intermediate" | "advanced";
  playingStyle: "defensive" | "offensive" | "balanced";
  price: "budgetFriendly" | "midRange" | "premium";
  weight: "lightweight" | "medium" | "heavyweight";
};

const getPriceRange = (price: string): [number, number] => {
  switch (price) {
    case "budgetFriendly":
      return [0, 50];
    case "midRange":
      return [50, 100];
    case "premium":
      return [100, Infinity];
    default:
      return [0, Infinity];
  }
};

const getWeightRange = (weight: string): [number, number] => {
  switch (weight) {
    case "lightweight":
      return [0, 7.7];
    case "medium":
      return [7.8, 8.2];
    case "heavyweight":
      return [8.3, Infinity];
    default:
      return [0, Infinity];
  }
};

const spinRatingToScore = (rating: string): number => {
  switch (rating) {
    case "Very High": return 90;
    case "High": return 70;
    case "Medium": return 50;
    case "Low": return 30;
    default: return 0;
  }
};

const scorePlayingStyle = (paddle: Paddle, style: string): number => {
  const spinScore = spinRatingToScore(paddle.SpinRating);
  const powerPct = paddle.PowerPercentile ?? 0;
  const firepower = paddle.Firepower ?? 0;
  const popPct = paddle.PopPercentile ?? 0;
  
  switch (style) {
    case "defensive":
      return (spinScore + (100 - powerPct)) / 2;
    case "offensive":
      return (powerPct + firepower) / 2;
    case "balanced":
      return (spinScore + powerPct + popPct) / 3;
    default:
      return 0;
  }
};

// Pre-compute a curated pool: top 10 paddles per price range by Firepower
const PADDLES_PER_RANGE = 10;

const buildCuratedPool = (): Paddle[] => {
  const ranges: [number, number][] = [
    [0, 50],       // budgetFriendly
    [50, 100],     // midRange
    [100, Infinity], // premium
  ];

  const pool: Paddle[] = [];
  for (const [min, max] of ranges) {
    const inRange = paddlesData
      .filter(p => p.Price >= min && p.Price <= max)
      .sort((a, b) => (b.Firepower ?? 0) - (a.Firepower ?? 0))
      .slice(0, PADDLES_PER_RANGE);
    pool.push(...inRange);
  }
  return pool;
};

const curatedPool = buildCuratedPool();

type RecommendationResult = {
  paddles: Paddle[];
  isFallback: boolean;
  fallbackMessage?: string;
};

const getRecommendedPaddles = (preferences: UserPreferences): RecommendationResult => {
  const [minPrice, maxPrice] = getPriceRange(preferences.price);
  const [minWeight, maxWeight] = getWeightRange(preferences.weight);

  let filteredPaddles = curatedPool.filter(paddle => 
    paddle.Price >= minPrice &&
    paddle.Price <= maxPrice &&
    paddle.StaticWeight >= minWeight &&
    paddle.StaticWeight <= maxWeight
  );

  let isFallback = false;
  let fallbackMessage: string | undefined;

  // If no paddles found in price range (e.g. <$50), widen to next range
  if (filteredPaddles.length === 0) {
    isFallback = true;
    fallbackMessage = "There are no paddles that fit your specifications in your budgeted price range, but here are some great alternatives";
    filteredPaddles = curatedPool.filter(paddle =>
      paddle.StaticWeight >= minWeight &&
      paddle.StaticWeight <= maxWeight
    );
  }

  const scoredPaddles = filteredPaddles.map(paddle => ({
    paddle,
    score: scorePlayingStyle(paddle, preferences.playingStyle)
  }));

  return {
    paddles: scoredPaddles
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.paddle),
    isFallback,
    fallbackMessage,
  };
};

export { getRecommendedPaddles };
export type { RecommendationResult };
