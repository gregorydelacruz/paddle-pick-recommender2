
import { Review } from "@/types/review";
import { dymonReviews } from "./dymon";
import { crbnReviews } from "./crbn";
import { diademReviews } from "./diadem";
import { bodyHelixReviews } from "./body-helix";
import { breadAndButterReviews } from "./bread-and-butter";
import { birdReviews } from "./bird";
import { elevenSix24Reviews } from "./11six24";
import { cheetahReviews } from "./cheetah";
import { chorusReviews } from "./chorus";
import { coreReviews } from "./core";
import { electrumReviews } from "./electrum";

const reviews: Record<string, Review> = {
  ...dymonReviews,
  ...crbnReviews,
  ...diademReviews,
  ...bodyHelixReviews,
  ...breadAndButterReviews,
  ...birdReviews,
  ...elevenSix24Reviews,
  ...cheetahReviews,
  ...chorusReviews,
  ...coreReviews,
  ...electrumReviews,
};

export default reviews;
