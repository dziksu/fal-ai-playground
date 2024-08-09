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
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export const FieldSafetyChecker = () => {
  const form = useFormContext<FormType>();

  return (
    <FormField
      control={form.control}
      name="enable_safety_checker"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Enable safety checker</FormLabel>
          <FormControl>
            <div className="flex items-center space-x-2">
              <Switch
                disabled={form.formState.isSubmitting}
                id="enable_safety_checker"
                checked={field.value || false}
                onCheckedChange={(val) => {
                  field.onChange(val);
                  field.onBlur();
                }}
              />
              <Label htmlFor="enable_safety_checker">{field.value ? 'Enabled' : 'Disabled'}</Label>
            </div>
          </FormControl>
          <FormMessage />
          <FormDescription></FormDescription>
        </FormItem>
      )}
    />
  );
};
