import * as fal from '@fal-ai/serverless-client';
import { ModelTextToImageId } from '@/modules/playground/types/model-text-to-image.type';
import { ImageSizeEnumType } from '@/modules/playground/types/imageType';
import { InputType } from '@/modules/playground/types/input.type';

export async function POST(request: Request) {
  const formData = await request.formData();

  const modelId = formData.get('modelId') as ModelTextToImageId;
  const prompt = formData.get('prompt');
  const num_inference_steps = formData.get('num_inference_steps');
  const guidance_scale = formData.get('guidance_scale');
  const num_images = formData.get('num_images');
  const enable_safety_checker = formData.get('enable_safety_checker');
  const sync_mode = formData.get('sync_mode');
  const image_size = formData.get('image_size') as ImageSizeEnumType;
  const image_sizes_width = formData.get('image_sizes_width');
  const image_sizes_height = formData.get('image_sizes_height');

  const imageSize: InputType['image_size'] | InputType['image_sizes'] =
    image_size === 'custom'
      ? {
          width: Number(image_sizes_width) || 200,
          height: Number(image_sizes_height) || 200,
        }
      : image_size;

  const body: Omit<InputType, 'image_sizes' | 'image_size'> & {
    image_size: InputType['image_size'] | InputType['image_sizes'];
  } = {
    prompt: String(prompt || ''),
    image_size: imageSize || 'landscape_4_3',
    num_inference_steps: Number(num_inference_steps) || 28,
    guidance_scale: Number(guidance_scale) || 3.5,
    num_images: Number(num_images) || 1,
    enable_safety_checker: Boolean(enable_safety_checker === 'true'),
    sync_mode: Boolean(sync_mode === 'true'),
  };

  const result = await fal.subscribe(modelId || 'fal-ai/flux/dev', {
    input: body,
    logs: false,
  });

  return Response.json(result);
}
