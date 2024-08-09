import { z } from 'zod';

export const IMAGE_SIZE_OPTIONS = [
  'custom',
  'square_hd',
  'square',
  'portrait_4_3',
  'portrait_16_9',
  'landscape_4_3',
  'landscape_16_9',
] as const;

export const ImageSizeSchemaEnum = z.enum(IMAGE_SIZE_OPTIONS);

export const ImageSizeSchema = z.object({
  height: z.number().min(1).finite().max(9999).step(1).optional(),
  width: z.number().min(1).finite().max(9999).step(1).optional(),
});

export type ImageSizeType = z.infer<typeof ImageSizeSchema>;

export type ImageSizeEnumType = z.infer<typeof ImageSizeSchemaEnum>;

export type ImageType = {
  url: string;
  width: number;
  height: number;
  content_type: 'image/jpeg';
};

export const IMAGE_SIZE_OPTIONS_MAPPER: Record<ImageSizeEnumType, Partial<ImageSizeType>> = {
  custom: { width: undefined, height: undefined },
  square_hd: { width: 1024, height: 1024 },
  square: { width: 512, height: 512 },
  portrait_4_3: { width: 768, height: 1024 },
  portrait_16_9: { width: 576, height: 1024 },
  landscape_4_3: { width: 1024, height: 768 },
  landscape_16_9: { width: 1024, height: 576 },
} as const;

export const IMAGE_SIZE_OPTIONS_LABEL_MAPPER: Record<ImageSizeEnumType, string> = {
  custom: `Custom`,
  square_hd: `Square HD (${IMAGE_SIZE_OPTIONS_MAPPER['square_hd'].width} / ${IMAGE_SIZE_OPTIONS_MAPPER['square_hd'].height})`,
  square: `Square (${IMAGE_SIZE_OPTIONS_MAPPER['square'].width} / ${IMAGE_SIZE_OPTIONS_MAPPER['square'].height})`,
  portrait_4_3: `Portrait 4/3 (${IMAGE_SIZE_OPTIONS_MAPPER['portrait_4_3'].width} / ${IMAGE_SIZE_OPTIONS_MAPPER['portrait_4_3'].height})`,
  portrait_16_9: `Portrait 16/9 (${IMAGE_SIZE_OPTIONS_MAPPER['portrait_16_9'].width} / ${IMAGE_SIZE_OPTIONS_MAPPER['portrait_16_9'].height})`,
  landscape_4_3: `Landscape 4/3 (${IMAGE_SIZE_OPTIONS_MAPPER['landscape_4_3'].width} / ${IMAGE_SIZE_OPTIONS_MAPPER['landscape_4_3'].height})`,
  landscape_16_9: `Landscape 16/9 (${IMAGE_SIZE_OPTIONS_MAPPER['landscape_16_9'].width} / ${IMAGE_SIZE_OPTIONS_MAPPER['landscape_16_9'].height})`,
} as const;
