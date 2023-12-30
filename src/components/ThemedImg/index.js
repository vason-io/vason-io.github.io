import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useColorMode } from '@docusaurus/theme-common';

if (ExecutionEnvironment.canUseDOM) {
  document.onreadystatechange = function (e) {
    console.log('onreadystatechange');
    const theme = document.body.parentElement.dataset.theme;
    for (const img of document.getElementsByTagName('IMG')) {
      img.src =
        theme === 'dark'
          ? img.src.replace('_light.', '_dark.')
          : img.src.replace('_dark.', '_light.');
    }
  };
  // We also need to setCodeRevealTriggers when the page first loads; otherwise,
  // after reloading the page, these triggers will not be set until the user
  // navigates somewhere.
  window.addEventListener('load', () => {
    console.log('load');
  });
}

export default function ThemedImg({ alt, name }) {
  const { colorMode } = useColorMode();
  return <img src={`/img/${name}_${colorMode}.png`} alt={alt ?? name} />;
}
