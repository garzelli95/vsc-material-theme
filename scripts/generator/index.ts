import * as fs from 'fs-extra';
import * as path from 'path';

import {generateTheme} from '@moxer/vscode-theme-generator';
import {ThemeSetting} from './types';
import {getColorSet} from './color-set';
import {BUILD_FOLDER_PATH} from '../../src/env';

type RGB = [number, number, number];

function getRgbColorFromHex(hex: string) {
  hex = hex.slice(1);
  const value = parseInt(hex, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;

  return [r, g, b] as RGB;
}

function luminance(rgb: RGB) {
  const [r, g, b] = rgb.map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
}

function contrast(foregroundColor: RGB, backgroundColor: RGB) {
  const foregroundLuminance = luminance(foregroundColor);
  const backgroundLuminance = luminance(backgroundColor);
  return backgroundLuminance > foregroundLuminance ?
    ((backgroundLuminance + 0.05) / (foregroundLuminance + 0.05)) :
    ((foregroundLuminance + 0.05) / (backgroundLuminance + 0.05));
}

function contrastOutcome(contrastRatio: number) {
  let contrastOutcome = 'bad';
  if (contrastRatio >= 7.0) {
    contrastOutcome = 'AAA';
  } else if (contrastRatio >= 4.5) {
    contrastOutcome = 'AA';
  } else if (contrastRatio >= 3.0) {
    contrastOutcome = 'A';
  }

  return contrastOutcome;
}

function checkThemeContrast(theme: ThemeSetting) {
  const colorObj = {...theme.scheme.alt, ...theme.scheme.base};
  let color: keyof typeof colorObj;

  console.log(`\n${theme.name} accessibility table:\n`);
  console.log('| Foreground | vs Background | vs BackgroundAlt |');
  console.log('| ---------- | ------------- | ---------------- |');
  for (color in colorObj) {
    if (Object.prototype.hasOwnProperty.call(colorObj, color)) {
      if (color !== 'black' && color !== 'white') {
        const foregroundRGB = getRgbColorFromHex(colorObj[color]);
        const backgroundRGB = getRgbColorFromHex(theme.scheme.background);
        const backgroundAltRGB = getRgbColorFromHex(theme.scheme.backgroundAlt);

        const outcome = contrastOutcome(contrast(foregroundRGB, backgroundRGB));
        const outcomeAlt = contrastOutcome(contrast(foregroundRGB, backgroundAltRGB));

        console.log(`| ${color.padStart(10, ' ')} | ${outcome.padStart(13, ' ')} | ${outcomeAlt.padStart(16, ' ')} |`);
      }
    }
  }
}

const THEME_BUILD_PATH = path.join(BUILD_FOLDER_PATH, 'themes');

const withHC = ['default-hc'];

const themeModules = withHC.map(async theme => import(`./settings/specific/${theme}`).then(res => res.default));

const generate = async (): Promise<void> => {
  await fs.mkdirp(THEME_BUILD_PATH);
  const modules = await Promise.all(themeModules) as ThemeSetting[];
  modules.forEach(theme => {
    const colorSet = getColorSet(theme);
    checkThemeContrast(theme);
    generateTheme(theme.name, colorSet, path.join(THEME_BUILD_PATH, `${theme.name}.json`));
  });
};

const run = async (): Promise<void> => {
  try {
    await generate();
  } catch (error) {
    console.error('ERROR build:generate-themes', error);
    process.exit(1);
  }
};

void run();
