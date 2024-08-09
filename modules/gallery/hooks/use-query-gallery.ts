import { useQuery } from '@tanstack/react-query';
import { OutputType } from '@/modules/playground/types/output.type';
import { getGalleryFromLocalStorage } from '@/lib/local-storage-gallery';

export const useQueryGallery = () => {
  return useQuery<unknown, Error, OutputType[]>({
    queryKey: ['gallery'],
    queryFn: () => {
      try {
        return getGalleryFromLocalStorage();
      } catch (err) {
        console.log(err);
        return [] as OutputType[];
      }
    },
    staleTime: 99999999,
  });
};
