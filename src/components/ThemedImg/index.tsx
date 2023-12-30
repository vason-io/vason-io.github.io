import React from 'react';
import ThemedImage from '@docusaurus/theme-classic/lib/theme/ThemedImage';

export const ThemedImg = ({ name, alt }: { name: string; alt?: string }) => (
  <ThemedImage
    alt={alt ?? name}
    sources={{
      light: `/img/${name}_light.png`,
      dark: `/img/${name}_dark.png`,
    }}
  />
);
