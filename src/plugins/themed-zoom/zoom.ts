import siteConfig from '@generated/docusaurus.config';
import mediumZoom, { Zoom, ZoomOptions, ZoomSelector } from 'medium-zoom';
import { ClientModule } from '@docusaurus/types';

const { themeConfig } = siteConfig;

type ZoomConfig = {
  selector: ZoomSelector;
  background: {
    light: string;
    dark: string;
  };
  config: ZoomOptions;
};

function getBackgroundColor(zoom: ZoomConfig) {
  const isDarkMode = document.querySelector('html[data-theme="dark"]');

  return isDarkMode
    ? zoom.background?.dark || 'rgb(50, 50, 50)'
    : zoom.background?.light || 'rgb(255, 255, 255)';
}

export default (function () {
  if (typeof window === 'undefined') {
    return null;
  }

  let zoomObject: Zoom;

  const { zoom }: { zoom?: ZoomConfig } = themeConfig;
  const { selector = '.markdown img', config = {} } =
    zoom || ({} as ZoomConfig);

  if (!zoom) {
    return null;
  }

  new MutationObserver(function () {
    if (zoomObject) {
      zoomObject.detach();
    }

    config.background = getBackgroundColor(zoom);
    zoomObject = mediumZoom(selector, config);
  }).observe(document.querySelector('html')!, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  window.onload = () => {
    if (zoomObject) {
      zoomObject.detach();
    }

    config.background = getBackgroundColor(zoom);
    zoomObject = mediumZoom(selector, config);
  };

  // TODO: Get rid of this timeout
  setTimeout(() => {
    if (zoomObject) {
      zoomObject.detach();
    }

    config.background = getBackgroundColor(zoom);
    zoomObject = mediumZoom(selector, config);
  }, 1000);

  return {
    onRouteDidUpdate() {
      if (zoomObject) {
        zoomObject.detach();
      }

      zoomObject = mediumZoom(selector, config);
    },
  } satisfies ClientModule;
})();
