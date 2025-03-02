
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
import { engageReviews } from "./engage";
import { franklinReviews } from "./franklin";
import { gammaReviews } from "./gamma";
import { gearboxReviews } from "./gearbox";
import { gentleBoomsReviews } from "./gentle-booms";
import { gruvnReviews } from "./gruvn";
import { hudeReviews } from "./hude";
import { joolaReviews } from "./joola";
import { komodoReviews } from "./komodo";
import { maverixReviews } from "./maverix";
import { ethosReviews } from "./ethos";

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
  ...engageReviews,
  ...franklinReviews,
  ...gammaReviews,
  ...gearboxReviews,
  ...gentleBoomsReviews,
  ...gruvnReviews,
  ...hudeReviews,
  ...joolaReviews,
  ...komodoReviews,
  ...maverixReviews,
  ...ethosReviews,
};

export default reviews;
