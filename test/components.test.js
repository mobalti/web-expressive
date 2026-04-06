import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import { globSync } from 'glob';

test('Components are properly layered', () => {
  const componentFiles = globSync('lib/components/*.css');
  assert.ok(componentFiles.length > 0, 'No components found in lib/components');

  for (const file of componentFiles) {
    let content = fs.readFileSync(file, 'utf-8');

    // Ignore @font-face blocks when checking component layering.
    content = content.replace(/@font-face\s*\{[^}]+\}/g, '');

    assert.match(
      content, 
      /@layer\s+[\w.-]+\s*\{/, 
      `File ${file} must wrap its component logic in an @layer directive`
    );
  }
});
