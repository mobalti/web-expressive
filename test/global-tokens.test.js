import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

test('Global tokens contain specific required variables', () => {
  const content = fs.readFileSync('lib/_global-tokens.css', 'utf-8');

  const expectedTokens = [
    '--sys-motion-spring-fast-spatial', // Animation
    '--sys-typescale-display-large',    // Typography
    '--sys-shape-corner-medium',        // Shapes
    '--sys-elevation-level1',           // Elevation
    '--ref-typeface-brand'              // Typeface
  ];

  for (const token of expectedTokens) {
    const regex = new RegExp(`${token}\\s*:`);
    assert(
      // Some public tokens are registered with @property instead of assigned in a rule.
      regex.test(content) || content.includes(`@property ${token}`),
      `Expected global token ${token} to be present in _global-tokens.css`
    );
  }
});
