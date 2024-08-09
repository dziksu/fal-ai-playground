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
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

export const FieldNumberOfInferenceSteps = () => {
  const form = useFormContext<FormType>();

  return (
    <FormField
      control={form.control}
      name="num_inference_steps"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Num Inference Steps</FormLabel>
          <FormControl>
            <div className="flex items-center space-x-4">
              <Slider
                disabled={form.formState.isSubmitting}
                value={[Number(field.value) || 1]}
                max={50}
                min={1}
                step={1}
                onValueChange={(value) => {
                  field.onChange(value[0]);
                  field.onBlur();
                }}
                className={cn('w-full')}
              />
              <Input
                disabled={form.formState.isSubmitting}
                {...field}
                onChange={(event) => field.onChange(Number(event.target.value))}
                type="number"
                className="w-40"
                max={50}
                min={1}
                step={1}
              />
            </div>
          </FormControl>
          <FormMessage />
          <FormDescription></FormDescription>
        </FormItem>
      )}
    />
  );
};
