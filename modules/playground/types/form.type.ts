import { InputTypeSchema } from '@/modules/playground/types/input.type';
import { ModelTextToImageIdSchema } from '@/modules/playground/types/model-text-to-image.type';
import { z } from 'zod';

export const FormTypeSchema = InputTypeSchema.and(
  z.object({
    modelId: ModelTextToImageIdSchema,
  }),
);

export type FormType = z.infer<typeof FormTypeSchema>;
