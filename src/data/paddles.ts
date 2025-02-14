
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
  electrumPaddles
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
  ...electrumPaddles
];

export default paddles;
