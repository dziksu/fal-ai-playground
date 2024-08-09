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

export const FieldNumberOfGuidanceScale = () => {
  const form = useFormContext<FormType>();

  const step = 0.5;
  const min = 1;
  const max = 20;

  return (
    <FormField
      control={form.control}
      name="guidance_scale"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Guidance scale (CFG)</FormLabel>
          <FormControl>
            <div className="flex items-center space-x-4">
              <Slider
                disabled={form.formState.isSubmitting}
                value={[Number(field.value) || 1]}
                max={max}
                min={min}
                step={step}
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
                max={max}
                min={min}
                step={step}
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
