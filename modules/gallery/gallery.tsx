'use client';

import { useQueryGallery } from '@/modules/gallery/hooks/use-query-gallery';
import { useMemo } from 'react';
import {
  Gallery as GalleryComponent,
  Image as ImageGalleryType,
  ThumbnailImageProps,
} from 'react-grid-gallery';
import { ImageDialog } from '@/components/image-dialog';

const ImageComponent = (props: ThumbnailImageProps) => {
  return (
    <ImageDialog
      {...props.imageProps}
      url={props.imageProps.src}
      content_type={'image/jpeg'}
      width={props.item.width}
      height={props.item.height}
    />
  );
};

export const Gallery = () => {
  const { data } = useQueryGallery();

  const imagesList = useMemo(() => data?.flatMap((x) => x.images), [data]);

  const hasNoData = imagesList?.length === 0;

  const imagesListToGalleryComponent: ImageGalleryType[] = (imagesList || []).map((x) => ({
    src: x.url,
    width: x.width,
    height: x.height,
    content_type: x.content_type,
  }));

  return (
    <div className="container">
      {hasNoData && (
        <div className="flex justify-center py-4">
          <h2 className="text-md my-2">
            No items in the local gallery, generate an image and the image will be saved
            automatically
          </h2>
        </div>
      )}

      <GalleryComponent
        enableImageSelection={false}
        rowHeight={300}
        images={imagesListToGalleryComponent}
        thumbnailImageComponent={ImageComponent}
      />
    </div>
  );
};
