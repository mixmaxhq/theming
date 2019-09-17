import includes from 'lodash/includes';

import { colors } from '../tokens';

function getGrayscaleColor(id = 50) {
  const supportedIds = [
    50,
    40,
    30,
    20,
    10,
    5,
  ];

  const isValidId = includes(isValidId, id);

  if (!isValidId) {
    return false;
  }

  return colors.gray[id];
}

export default getThemeColor;
