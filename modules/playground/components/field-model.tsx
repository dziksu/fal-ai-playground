import React from 'react';
import { useFormContext } from 'react-hook-form';
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
import { FormType } from '../types/form.type';
import { MODELS_TEXT_TO_IMAGE } from '../types/model-text-to-image.type';

export const FieldModelId = () => {
  const form = useFormContext<FormType>();

  return (
    <FormField
      control={form.control}
      name="modelId"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Model</FormLabel>
          <FormControl>
            <Select
              disabled={form.formState.isSubmitting}
              value={field.value}
              onValueChange={(value) => {
                field.onChange(value);
                field.onBlur();
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Models</SelectLabel>
                  {MODELS_TEXT_TO_IMAGE.map((x) => (
                    <SelectItem key={x.id} value={x.id}>
                      {x.id}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
          <FormDescription></FormDescription>
        </FormItem>
      )}
    />
  );
};
