import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ImageType } from '@/modules/playground/types/imageType';
import Image from 'next/image';
import { TrashIcon } from 'lucide-react';
import { MouseEventHandler, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { removeItemFromLocalStorageGallery } from '@/lib/local-storage-gallery';
import { useQueryClient } from '@tanstack/react-query';

type Props = ImageType;

export const ImageDialog = (props: Props) => {
  const queryClient = useQueryClient();
  const [removing, setRemoving] = useState<boolean>(false);

  const onTrashClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setRemoving(true);
  };

  const onRemoveItem: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    removeItemFromLocalStorageGallery(props.url);
    await queryClient.refetchQueries({ queryKey: ['gallery'] });
    setRemoving(false);
  };

  const onRemoveCancel: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setRemoving(false);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="group relative h-full">
            <Button variant="ghost" className="relative m-0 h-full w-full p-0">
              <Image
                loading="lazy"
                src={props.url}
                key={props.url}
                alt={props.url}
                width={props.width}
                height={props.height}
                className="h-full w-full rounded-md object-cover"
                placeholder={
                  'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACQAQCdASoFAAkAAgA0JQBOgB5mBMAA/vb+b7r9JZtxmbmmj6Uh84+Ae4Y0icG/BE66GlLYlAvJDRWsCR8AAA=='
                }
              />
            </Button>
            <Button
              variant="ghost"
              className="absolute right-2 top-2 bg-white p-2 opacity-0 group-hover:opacity-100"
              onClick={onTrashClick}
            >
              <TrashIcon />
            </Button>
            <AlertDialog open={removing}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your image and remove
                    your data from your local storage.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={onRemoveCancel}>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={onRemoveItem}>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </DialogTrigger>
        <DialogContent className="w-auto max-w-full">
          <DialogHeader>
            <DialogTitle>Preview</DialogTitle>
            <DialogDescription>{props.content_type}</DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center space-x-2">
            <Image
              src={props.url}
              alt={props.url}
              width={props.width}
              height={props.height}
              className="h-auto max-h-[86vh] w-auto max-w-[80vw]"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
