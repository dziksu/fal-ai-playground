import { useQuery } from '@tanstack/react-query';
import { ImageType } from '@/modules/playground/types/imageType';

// const mockedData = [
//   {
//     url: 'https://fal.media/files/rabbit/RFZAUBvNpUP222lMENJLG.png',
//     width: 1024,
//     height: 768,
//     content_type: 'image/jpeg',
//   },
// ] as ImageType[];

export const useQueryGeneratedImages = () => {
  return useQuery<unknown, Error, ImageType[]>({
    queryKey: ['generated-images'],
    queryFn: async () => {
      return [];
    },
    staleTime: 99999999,
  });
};
