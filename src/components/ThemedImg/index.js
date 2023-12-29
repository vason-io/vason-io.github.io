import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useColorMode } from '@docusaurus/theme-common';

export default function ThemedImg({ alt, name }) {
  const { colorMode } = useColorMode();

  return (
    <img
      src={`/img/${name}_${
        ExecutionEnvironment.canUseDOM
          ? localStorage.getItem('theme') // document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
          : colorMode
      }.png`}
      alt={alt ?? name}
    />
  );
}
