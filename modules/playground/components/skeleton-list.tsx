import { Skeleton } from '@/components/ui/skeleton';
import * as React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { FormType } from '@/modules/playground/types/form.type';
import { IMAGE_SIZE_OPTIONS_MAPPER } from '@/modules/playground/types/imageType';
import { AspectRatio } from '@/components/ui/aspect-ratio';

type Props = { isPending: boolean };

export const SkeletonList = (props: Props) => {
  const form = useFormContext<FormType>();

  const numOfImages = useWatch({
    control: form.control,
    name: 'num_images',
  });

  const sizeOfImage = useWatch({
    control: form.control,
    name: 'image_size',
  });

  const sizesOfImage = useWatch({
    control: form.control,
    name: 'image_sizes',
  });

  const imageSize =
    sizeOfImage !== 'custom'
      ? IMAGE_SIZE_OPTIONS_MAPPER[sizeOfImage]
      : { width: sizesOfImage.width, height: sizesOfImage.height };

  return (
    <>
      {props.isPending &&
        new Array(numOfImages).fill(null).map((_, index) => (
          <AspectRatio
            key={index}
            ratio={(imageSize.width || 100) / (imageSize.height || 100)}
            className="rounded-md bg-muted"
          >
            <Skeleton className={`w-full rounded-md object-cover`} />
          </AspectRatio>
        ))}
    </>
  );
};
