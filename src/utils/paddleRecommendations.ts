
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
    case "budget":
      return [0, 130];
    case "midRange":
      return [130, 220];
    case "premium":
      return [220, Infinity];
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
    case "control":
      return (spinScore + (100 - powerPct)) / 2;
    case "power":
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
    [0, 130],    // budget
    [130, 220],  // midRange
    [220, Infinity], // premium
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

const getRecommendedPaddles = (preferences: UserPreferences): Paddle[] => {
  const [minPrice, maxPrice] = getPriceRange(preferences.price);
  const [minWeight, maxWeight] = getWeightRange(preferences.weight);

  const filteredPaddles = curatedPool.filter(paddle => 
    paddle.Price >= minPrice &&
    paddle.Price <= maxPrice &&
    paddle.StaticWeight >= minWeight &&
    paddle.StaticWeight <= maxWeight
  );

  const scoredPaddles = filteredPaddles.map(paddle => ({
    paddle,
    score: scorePlayingStyle(paddle, preferences.playingStyle)
  }));

  return scoredPaddles
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.paddle);
};

export { getRecommendedPaddles };
