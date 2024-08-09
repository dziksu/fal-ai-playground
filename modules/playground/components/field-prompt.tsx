import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormType } from '@/modules/playground/types/form.type';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

export const FieldPrompt = () => {
  const form = useFormContext<FormType>();

  return (
    <FormField
      control={form.control}
      name="prompt"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Prompt</FormLabel>
          <FormControl>
            <Textarea
              disabled={form.formState.isSubmitting}
              id="prompt"
              placeholder="Enter a description of the image you want to generate"
              className="w-full"
              rows={4}
              {...field}
            />
          </FormControl>
          <FormMessage />
          <FormDescription></FormDescription>
        </FormItem>
      )}
    />
  );
};
