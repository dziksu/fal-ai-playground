'use client';

import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormType, FormTypeSchema } from '@/modules/playground/types/form.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { IMAGE_SIZE_OPTIONS_MAPPER } from '@/modules/playground/types/imageType';

export function FormGeneratorProvider({ children }: { children: React.ReactNode }) {
  const form = useForm<FormType>({
    resolver: zodResolver(FormTypeSchema),
    defaultValues: {
      modelId: 'fal-ai/flux/dev',
      image_size: 'square',
      image_sizes: {
        ...IMAGE_SIZE_OPTIONS_MAPPER['landscape_4_3'],
      },
      enable_safety_checker: true,
      guidance_scale: 3.5,
      num_images: 1,
      num_inference_steps: 25,
      prompt: '',
      seed: undefined,
      sync_mode: false,
    },
  });

  return <FormProvider {...form}>{children}</FormProvider>;
}
