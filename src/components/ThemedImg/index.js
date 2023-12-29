import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function ThemedImg({ alt, name, children }) {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <img
      data-alt={colorMode}
      src={
        colorMode === 'dark'
          ? `/img/${name ?? children}_dark.png`
          : `/img/${name ?? children}_light.png`
      }
      alt={name ?? alt ?? children}
      // title={alt ?? children}
    />
  );
}
