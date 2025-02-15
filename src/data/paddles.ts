
import { Paddle } from "@/types/paddle";
import { 
  elevenSix24Paddles,
  birdPaddles,
  bodyHelixPaddles,
  breadAndButterPaddles,
  cheetahPaddles,
  chorusPaddles,
  corePaddles,
  crbnPaddles,
  diademPaddles,
  dymonPaddles,
  electrumPaddles,
  engagePaddles
} from "./manufacturers";

const paddles: Paddle[] = [
  ...elevenSix24Paddles,
  ...birdPaddles,
  ...bodyHelixPaddles,
  ...breadAndButterPaddles,
  ...cheetahPaddles,
  ...chorusPaddles,
  ...corePaddles,
  ...crbnPaddles,
  ...diademPaddles,
  ...dymonPaddles,
  ...electrumPaddles,
  ...engagePaddles
];

export default paddles;
