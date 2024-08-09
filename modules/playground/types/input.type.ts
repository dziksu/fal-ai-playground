import { z } from 'zod';
import { ImageSizeSchema, ImageSizeSchemaEnum } from '@/modules/playground/types/imageType';

export const InputTypeSchema = z.object({
  prompt: z.string().min(1).describe('The prompt to generate an image from.'),
  image_size: ImageSizeSchemaEnum,
  image_sizes: ImageSizeSchema,
  num_inference_steps: z
    .number()
    .min(1)
    .step(1)
    .max(50)
    .optional()
    .describe('The number of inference steps to perform. Default value: 28'),
  guidance_scale: z
    .number()
    .min(1)
    .step(0.5)
    .max(20)
    .describe('Classifier free guidance scale Default value: 3.5'),
  seed: z
    .union([z.number().optional(), z.string().optional()])
    .describe(
      'The same seed and the same prompt given to the same version of the model will output the same image every time.',
    ),
  sync_mode: z
    .boolean()
    .optional()
    .describe(
      'If set to true, the function will wait for the image to be generated and uploaded before returning the response. This will increase the latency of the function but it allows you to get the image directly in the response without going through the CDN.',
    ),
  num_images: z
    .number()
    .min(1)
    .step(1)
    .max(4)
    .optional()
    .describe('The number of images to generate. Default value: 1'),
  enable_safety_checker: z
    .boolean()
    .optional()
    .describe('If set to true, the safety checker will be enabled. Default value: true'),
});

export type InputType = z.infer<typeof InputTypeSchema>;
