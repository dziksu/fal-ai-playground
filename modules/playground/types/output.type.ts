import { ImageType } from './imageType';

export type OutputType = {
  seed: number;
  images: ImageType[];
  prompt: string;
  timings: {
    inference: number;
  };
  has_nsfw_concepts: [boolean];
};
