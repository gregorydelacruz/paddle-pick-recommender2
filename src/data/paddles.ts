
import { Paddle } from "@/types/paddle";
import elevenSix24Paddles from "./manufacturers/11Six24";
import birdPaddles from "./manufacturers/Bird";
import bodyHelixPaddles from "./manufacturers/BodyHelix";

const paddles: Paddle[] = [
  ...elevenSix24Paddles,
  ...birdPaddles,
  ...bodyHelixPaddles,
];

export default paddles;
