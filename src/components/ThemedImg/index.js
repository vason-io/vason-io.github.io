import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function ThemedImg({ alt, name }) {
  const { colorMode } = useColorMode();
  return <img src={`/img/${name}_${colorMode}.png`} alt={alt ?? name} />;
}
