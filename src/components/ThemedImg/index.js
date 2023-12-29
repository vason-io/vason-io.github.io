import React from 'react';

export default function ThemedImg({ alt, name }) {
  return (
    <img
      src={
        document.body.parentElement.dataset.theme === 'dark' //document.getElementsByTagName('HTML')[0].dataset.theme === 'dark'
          ? `/img/${name}_dark.png`
          : `/img/${name}_light.png`
      }
      alt={name ?? alt} // title={alt ?? children}
    />
  );
}
