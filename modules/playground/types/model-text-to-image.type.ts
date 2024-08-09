import { z } from 'zod';

export type ModelTag = 'inference' | 'commercial-use' | 'private' | 'optimized';

const MODELS_TEXT_TO_IMAGE_IDS = [
  'fal-ai/aura-flow',
  'fal-ai/flux/dev',
  'fal-ai/flux',
  'fal-ai/flux/schnell',
  'fal-ai/flux-pro',
  'fal-ai/stable-diffusion-v3-medium',
] as const;

export const ModelTextToImageIdSchema = z.enum(MODELS_TEXT_TO_IMAGE_IDS);

export type ModelTextToImageId = z.infer<typeof ModelTextToImageIdSchema>;

type Model = {
  id: ModelTextToImageId;
  tags: ModelTag[];
};

export const MODELS_TEXT_TO_IMAGE: Model[] = [
  {
    id: 'fal-ai/aura-flow',
    tags: ['inference', 'commercial-use', 'optimized'],
  },
  {
    id: 'fal-ai/flux/dev',
    tags: ['inference', 'commercial-use'],
  },
  {
    id: 'fal-ai/flux',
    tags: ['inference', 'private'],
  },
  {
    id: 'fal-ai/flux/schnell',
    tags: ['inference', 'commercial-use', 'optimized'],
  },
  {
    id: 'fal-ai/flux-pro',
    tags: ['inference', 'commercial-use'],
  },
  {
    id: 'fal-ai/stable-diffusion-v3-medium',
    tags: ['inference', 'commercial-use', 'optimized'],
  },
] as const;
