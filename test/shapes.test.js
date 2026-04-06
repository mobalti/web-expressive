import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

const expectedShapeNames = [
  'circle',
  'square',
  'triangle',
  'diamond',
  'clamshell',
  'pentagon',
  'oval',
  'pill',
  'semicircle',
  '4-leaf-clover',
  '8-leaf-clover',
  '4-sided-cookie',
  '6-sided-cookie',
  '7-sided-cookie',
  '9-sided-cookie',
  '12-sided-cookie',
  'sunny',
  'very-sunny',
  'burst',
  'soft-burst',
  'boom',
  'soft-boom',
  'heart',
  'flower',
  'gem',
  'fan',
  'ghost-ish',
  'pixel-circle',
  'pixel-triangle',
  'arch',
  'arrow',
  'slanted',
  'puffy',
  'puffy-diamond',
  'bun',
];

test('Shapes export the expected clip and mask tokens', () => {
  const shapesDir = path.join('lib', 'shapes');

  assert.ok(fs.existsSync(path.join(shapesDir, 'clip-tokens.css')), 'clip-tokens.css must exist');
  assert.ok(fs.existsSync(path.join(shapesDir, 'mask-tokens.css')), 'mask-tokens.css must exist');

  const clipContent = fs.readFileSync(path.join(shapesDir, 'clip-tokens.css'), 'utf-8');
  const maskContent = fs.readFileSync(path.join(shapesDir, 'mask-tokens.css'), 'utf-8');
  const uncommentedClipContent = clipContent.replace(/\/\*[\s\S]*?\*\//g, '');
  const uncommentedMaskContent = maskContent.replace(/\/\*[\s\S]*?\*\//g, '');

  const expectedClipTokens = expectedShapeNames.map((name) => `--sys-shape-clip-${name}`);
  const expectedMaskTokens = expectedShapeNames.map((name) => `--sys-shape-mask-${name}`);

  const clipTokens = [...uncommentedClipContent.matchAll(/--sys-shape-clip-[\w-]+(?=\s*:)/g)].map((m) => m[0]);
  const maskTokens = [...uncommentedMaskContent.matchAll(/--sys-shape-mask-[\w-]+(?=\s*:)/g)].map((m) => m[0]);

  const uniqueClips = new Set(clipTokens);
  const uniqueMasks = new Set(maskTokens);

  const missingClips = expectedClipTokens.filter((token) => !uniqueClips.has(token));
  const unexpectedClips = [...uniqueClips].filter((token) => !expectedClipTokens.includes(token));
  const missingMasks = expectedMaskTokens.filter((token) => !uniqueMasks.has(token));
  const unexpectedMasks = [...uniqueMasks].filter((token) => !expectedMaskTokens.includes(token));

  assert.deepStrictEqual(
    {
      missing: missingClips,
      unexpected: unexpectedClips,
    },
    { missing: [], unexpected: [] },
    [
      'clip-tokens.css must export the expected clip token set.',
      missingClips.length > 0 ? `Missing: ${missingClips.join(', ')}` : '',
      unexpectedClips.length > 0 ? `Unexpected: ${unexpectedClips.join(', ')}` : '',
    ]
      .filter(Boolean)
      .join(' ')
  );

  assert.deepStrictEqual(
    {
      missing: missingMasks,
      unexpected: unexpectedMasks,
    },
    { missing: [], unexpected: [] },
    [
      'mask-tokens.css must export the expected mask token set.',
      missingMasks.length > 0 ? `Missing: ${missingMasks.join(', ')}` : '',
      unexpectedMasks.length > 0 ? `Unexpected: ${unexpectedMasks.join(', ')}` : '',
    ]
      .filter(Boolean)
      .join(' ')
  );
});

test('Clip tokens use shape() and mask tokens use url()', () => {
  const shapesDir = path.join('lib', 'shapes');
  const clipContent = fs.readFileSync(path.join(shapesDir, 'clip-tokens.css'), 'utf-8');
  const maskContent = fs.readFileSync(path.join(shapesDir, 'mask-tokens.css'), 'utf-8');
  const uncommentedClipContent = clipContent.replace(/\/\*[\s\S]*?\*\//g, '');
  const uncommentedMaskContent = maskContent.replace(/\/\*[\s\S]*?\*\//g, '');

  const invalidClipTokens = expectedShapeNames
    .map((name) => `--sys-shape-clip-${name}`)
    .filter((token) => {
      const escapedToken = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const matchesShape = new RegExp(`${escapedToken}\\s*:\\s*shape\\(`).test(uncommentedClipContent);
      return !matchesShape;
    });

  const invalidMaskTokens = expectedShapeNames
    .map((name) => `--sys-shape-mask-${name}`)
    .filter((token) => {
      const escapedToken = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const matchesUrl = new RegExp(`${escapedToken}\\s*:\\s*url\\(`).test(uncommentedMaskContent);
      return !matchesUrl;
    });

  assert.deepStrictEqual(
    invalidClipTokens,
    [],
    invalidClipTokens.length > 0
      ? `clip-tokens.css must use shape() values for: ${invalidClipTokens.join(', ')}`
      : undefined
  );

  assert.deepStrictEqual(
    invalidMaskTokens,
    [],
    invalidMaskTokens.length > 0
      ? `mask-tokens.css must use url() values for: ${invalidMaskTokens.join(', ')}`
      : undefined
  );
});
