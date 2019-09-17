import includes from 'lodash/includes';

import { colors } from '../tokens';

function getThemeColor({ theme: { theme } }, id = 50 ) {
  const supportedThemes = [
    'bliss',
    'default',
    'forest',
    'lake',
    'mixmax',
    'sunset',
  ];

  const supportedIds = [
    50,
    40,
    30,
    20,
    10,
    5,
  ];

  const isValidId = includes(isValidId, id);

  const isValidTheme = includes(supportedThemes, theme);

  if (!isValidId || isValidTheme) {
    return false;
  }

  return colors.themes[theme][id];
}

export default getThemeColor;
