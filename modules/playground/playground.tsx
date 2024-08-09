'use client';

import { Button } from '@/components/ui/button';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { useMutationGenerateImages } from './hooks/use-mutation-generate-images';
import { FormType } from './types/form.type';
import { FieldPrompt } from './components/field-prompt';
import { FieldModelId } from '@/modules/playground/components/field-model';
import { FieldNumberOfImages } from '@/modules/playground/components/field-number-of-images';
import { FieldSafetyChecker } from '@/modules/playground/components/field-safety-checker';
import { ImageDialog } from '@/components/image-dialog';
import { FieldNumberOfInferenceSteps } from '@/modules/playground/components/field-number-of-inference-steps';
import { FieldSeed } from '@/modules/playground/components/field-seed';
import { FieldNumberOfGuidanceScale } from '@/modules/playground/components/field-number-of-guidance-scale';
import { FieldImageSize } from '@/modules/playground/components/field-image-size';
import { useQueryGeneratedImages } from '@/modules/playground/hooks/use-query-generated-images';
import { SkeletonList } from '@/modules/playground/components/skeleton-list';

export default function Playground() {
  const { mutateAsync, isPending } = useMutationGenerateImages();
  const { data } = useQueryGeneratedImages();

  const form = useFormContext<FormType>();

  const submit = async (body: FormType) => {
    const data = new FormData();
    data.set('modelId', body.modelId);
    data.set('enable_safety_checker', String(body.enable_safety_checker || false));
    data.set('guidance_scale', String(body.guidance_scale));
    data.set('num_images', String(body.num_images));
    data.set('num_inference_steps', String(body.num_inference_steps));
    data.set('prompt', body.prompt);
    data.set('seed', String(body.seed));
    data.set('sync_mode', String(body.sync_mode));

    data.set('image_size', body.image_size);
    data.set('image_sizes_width', String(body.image_sizes?.width || 200));
    data.set('image_sizes_height', String(body.image_sizes?.height || 200));

    await mutateAsync(data);
  };

  const hasNoData = !isPending && !data?.length;

  return (
    <div className="container">
      <section className="grid grid-cols-1 gap-16 md:grid-cols-5">
        <div className="col-span-2 min-w-56">
          <h2 className="mb-4 text-2xl font-bold">Generate images</h2>
          <form className="space-y-4" onSubmit={form.handleSubmit(submit)}>
            <FieldModelId />
            <FieldPrompt />
            <FieldImageSize />
            <FieldNumberOfInferenceSteps />
            <FieldNumberOfImages />
            <FieldNumberOfGuidanceScale />
            <FieldSeed />
            <FieldSafetyChecker />
            <Button disabled={isPending} type="submit" className="w-full">
              Generate
            </Button>
          </form>
        </div>
        <div className="col-span-3">
          <h2 className="mb-4 text-2xl font-bold">Result</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
            <SkeletonList isPending={isPending} />
            {!isPending && (data || []).map((x) => <ImageDialog key={x.url} {...x} />)}
            {hasNoData && <p>No images to display</p>}
          </div>
        </div>
      </section>
    </div>
  );
}
