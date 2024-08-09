import { useMutation, useQueryClient } from '@tanstack/react-query';
import { httpClient } from '@/lib/http-client';
import { ImageType } from '@/modules/playground/types/imageType';
import { OutputType } from '@/modules/playground/types/output.type';
import { addItemToLocalStorageGallery } from '@/lib/local-storage-gallery';

const mockedData = [
  {
    url: 'https://fal.media/files/rabbit/RFZAUBvNpUP222lMENJLG.png',
    width: 1024,
    height: 768,
    content_type: 'image/jpeg',
  },
] as ImageType[];

export const useMutationGenerateImages = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['generate'],
    mutationFn: async (data: FormData) => {
      const response = await httpClient.post<OutputType>('/api/fal/generate', data);
      addItemToLocalStorageGallery({ ...response.data, date: new Date() });
      queryClient.setQueriesData(
        {
          queryKey: ['generated-images'],
        },
        response.data?.images || [],
      );
      queryClient.refetchQueries({ queryKey: ['gallery'] });
      return response.data;
    },
  });

  return {
    ...mutation,
    data: {
      ...mutation.data,
      images: mutation.data?.images || mockedData,
    },
  };
};
