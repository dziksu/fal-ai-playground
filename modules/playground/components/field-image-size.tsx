import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { FormType } from '@/modules/playground/types/form.type';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  IMAGE_SIZE_OPTIONS,
  IMAGE_SIZE_OPTIONS_LABEL_MAPPER,
  IMAGE_SIZE_OPTIONS_MAPPER,
} from '@/modules/playground/types/imageType';
import { Input } from '@/components/ui/input';

export const FieldImageSize = () => {
  const form = useFormContext<FormType>();

  const imageSize = useWatch({
    control: form.control,
    name: 'image_size',
  });

  const isCustom = imageSize === 'custom';

  return (
    <FormField
      control={form.control}
      name="image_size"
      render={({ field }) => (
        <div className="flex items-center space-x-4">
          <FormItem className="w-full min-w-[200px]">
            <FormLabel>Image size</FormLabel>
            <FormControl>
              <Select
                disabled={form.formState.isSubmitting}
                value={typeof field.value === 'string' ? field.value : ''}
                onValueChange={(value) => {
                  field.onChange(value);
                  field.onBlur();

                  const sizes = IMAGE_SIZE_OPTIONS_MAPPER[value as 'custom'];

                  if (sizes && value !== 'custom') {
                    form.setValue('image_sizes.width', sizes?.width || undefined);
                    form.setValue('image_sizes.height', sizes?.height || undefined);
                  }
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Image sizes</SelectLabel>
                    {IMAGE_SIZE_OPTIONS.map((x) => (
                      <SelectItem key={x} value={x}>
                        {IMAGE_SIZE_OPTIONS_LABEL_MAPPER[x]}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
            <FormDescription></FormDescription>
          </FormItem>
          <FormField
            control={form.control}
            name="image_sizes.width"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Width</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value || ''}
                    disabled={form.formState.isSubmitting || !isCustom}
                    onChange={(event) => field.onChange(Number(event.target.value))}
                    type="number"
                    className="min-w-[100px]"
                    max={9999}
                    min={0}
                    step={1}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription></FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image_sizes.height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value || ''}
                    disabled={form.formState.isSubmitting || !isCustom}
                    onChange={(event) => field.onChange(Number(event.target.value))}
                    type="number"
                    className="min-w-[100px]"
                    max={9999}
                    min={0}
                    step={1}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription></FormDescription>
              </FormItem>
            )}
          />
        </div>
      )}
    />
  );
};
