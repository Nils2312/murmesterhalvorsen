
import { createClient } from 'https://esm.sh/@sanity/client@6.15.20';
import imageUrlBuilder from 'https://esm.sh/@sanity/image-url@1.0.2';

export const client = createClient({
  projectId: 'ety44vik',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-24',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
