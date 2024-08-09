import { OutputType } from '@/modules/playground/types/output.type';

export type GalleryOutputType = OutputType & { date: Date };

export function saveInLocalStorageGallery(data: GalleryOutputType[]) {
  try {
    window.localStorage.setItem('gallery', JSON.stringify([...data]));
  } catch (err) {
    console.warn(['Warning: PROBLEM to save in LS', err]);
  }
}

export function addItemToLocalStorageGallery(data: GalleryOutputType) {
  try {
    const storage = JSON.parse(
      window.localStorage.getItem('gallery') || '[]',
    ) as GalleryOutputType[];
    window.localStorage.setItem('gallery', JSON.stringify([data, ...storage]));
  } catch (err) {
    console.warn(['Warning: PROBLEM to save in LS', err]);
  }
}

export function getGalleryFromLocalStorage() {
  const value = JSON.parse(window.localStorage.getItem('gallery') || '[]');
  return value as GalleryOutputType[];
}

export function removeItemFromLocalStorageGallery(imageUrl: string) {
  const galleryData = getGalleryFromLocalStorage();

  const result = galleryData
    .filter((x) => !!x.prompt)
    .map((x) => ({
      ...x,
      images: x.images.filter((y) => y.url !== imageUrl),
    }))
    .filter((x) => x.images.length > 0) as GalleryOutputType[];

  saveInLocalStorageGallery(result);

  return;
}
