import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { globSync } from 'glob';

const expectedSchemeTokens = [
  '--sys-color-primary',
  '--sys-color-surface-tint',
  '--sys-color-on-primary',
  '--sys-color-primary-container',
  '--sys-color-on-primary-container',
  '--sys-color-secondary',
  '--sys-color-on-secondary',
  '--sys-color-secondary-container',
  '--sys-color-on-secondary-container',
  '--sys-color-tertiary',
  '--sys-color-on-tertiary',
  '--sys-color-tertiary-container',
  '--sys-color-on-tertiary-container',
  '--sys-color-error',
  '--sys-color-on-error',
  '--sys-color-error-container',
  '--sys-color-on-error-container',
  '--sys-color-background',
  '--sys-color-on-background',
  '--sys-color-surface',
  '--sys-color-on-surface',
  '--sys-color-surface-variant',
  '--sys-color-on-surface-variant',
  '--sys-color-outline',
  '--sys-color-outline-variant',
  '--sys-color-shadow',
  '--sys-color-scrim',
  '--sys-color-inverse-surface',
  '--sys-color-inverse-on-surface',
  '--sys-color-inverse-primary',
  '--sys-color-primary-fixed',
  '--sys-color-on-primary-fixed',
  '--sys-color-primary-fixed-dim',
  '--sys-color-on-primary-fixed-variant',
  '--sys-color-secondary-fixed',
  '--sys-color-on-secondary-fixed',
  '--sys-color-secondary-fixed-dim',
  '--sys-color-on-secondary-fixed-variant',
  '--sys-color-tertiary-fixed',
  '--sys-color-on-tertiary-fixed',
  '--sys-color-tertiary-fixed-dim',
  '--sys-color-on-tertiary-fixed-variant',
  '--sys-color-surface-dim',
  '--sys-color-surface-bright',
  '--sys-color-surface-container-lowest',
  '--sys-color-surface-container-low',
  '--sys-color-surface-container',
  '--sys-color-surface-container-high',
  '--sys-color-surface-container-highest',
];

test('Schemes match structural constraints', () => {
  const schemeFiles = globSync('lib/schemes/*.css');
  assert.ok(schemeFiles.length > 0, 'No schemes found in lib/schemes');

  for (const file of schemeFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const uncommentedContent = content.replace(/\/\*[\s\S]*?\*\//g, '');
    const filename = path.basename(file, '.css');

    if (filename !== 'monochrome') {
      assert.match(
        content,
        /^\/\*\s*Source:\s*(?:#[0-9A-Fa-f]{6}|\[(?:\s*#[0-9A-Fa-f]{6}\s*)(?:,\s*#[0-9A-Fa-f]{6}\s*)*\])\s*\*\//,
        `File ${file} must start with a standard source comment using one hex value or a bracketed list`
      );
    }

    assert.ok(
      content.includes('@layer design-system.tokens {'),
      `File ${file} missing @layer design-system.tokens wrapper`
    );

    const expectedSelector = new RegExp(
      String.raw`html\s*,\s*\n\s*\[data-theme="${filename}"\]\s*\{`
    );
    assert.match(
      content,
      expectedSelector,
      `File ${file} must use html and a matching data-theme selector`
    );

    const declaredTokenMatches = [...uncommentedContent.matchAll(/--[\w-]+(?=\s*:)/g)];
    const declaredTokens = new Set(declaredTokenMatches.map((match) => match[0]));
    const lightDarkTokenMatches = [...uncommentedContent.matchAll(/--[\w-]+(?=\s*:\s*light-dark\()/g)];
    const actualTokens = new Set(lightDarkTokenMatches.map((match) => match[0]));
    const missingTokens = expectedSchemeTokens.filter((token) => !actualTokens.has(token));
    const unexpectedTokens = [...actualTokens].filter((token) => !expectedSchemeTokens.includes(token));
    const tokensWithoutLightDark = expectedSchemeTokens.filter(
      (token) => declaredTokens.has(token) && !actualTokens.has(token)
    );

    assert.deepStrictEqual(
      {
        missing: missingTokens.filter((token) => !tokensWithoutLightDark.includes(token)),
        unexpected: unexpectedTokens,
        invalid: tokensWithoutLightDark,
      },
      { missing: [], unexpected: [], invalid: [] },
      [
        `File ${file} must export the expected scheme token set.`,
        tokensWithoutLightDark.length > 0
          ? `Expected light-dark() values for: ${tokensWithoutLightDark.join(', ')}`
          : '',
        missingTokens.filter((token) => !tokensWithoutLightDark.includes(token)).length > 0
          ? `Missing: ${missingTokens.filter((token) => !tokensWithoutLightDark.includes(token)).join(', ')}`
          : '',
        unexpectedTokens.length > 0 ? `Unexpected: ${unexpectedTokens.join(', ')}` : '',
      ]
        .filter(Boolean)
        .join(' ')
    );
  }
});
