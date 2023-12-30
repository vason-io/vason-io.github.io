import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useColorMode } from '@docusaurus/theme-common';

if (ExecutionEnvironment.canUseDOM) {
  document.onreadystatechange = function (e) {};
  // We also need to setCodeRevealTriggers when the page first loads; otherwise,
  // after reloading the page, these triggers will not be set until the user
  // navigates somewhere.
  window.addEventListener('load', () => {
    const theme = document.body.parentElement.dataset.theme;
    setTimeout(() => {
      let imgs = document.getElementsByTagName('IMG');
      console.log(imgs.length);
      for (const img of imgs) {
        img.src =
          theme === 'dark'
            ? img.src.replace('_light.', '_dark.')
            : img.src.replace('_dark.', '_light.');
        img.style.visibility = 'visible';
      }
    }, 200);
  });
}

export default function ThemedImg({ alt, name }) {
  const { colorMode } = useColorMode();
  return (
    <img
      src={`/img/${name}_${colorMode}.png`}
      alt={alt ?? name}
      style={{ visibility: 'hidden' }}
    />
  );
}
