import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { globSync } from 'glob';

const EXPECTED_EXPORT_COUNT = 44;

test('CSS exports match strict structural and count constraints', () => {
  const allFiles = globSync('lib/**/*.css', { ignore: 'lib/**/_*.css' }).map(p => p.replace(/\\/g, '/'));
  
  assert.strictEqual(
    allFiles.length, 
    EXPECTED_EXPORT_COUNT, 
    `Expected exactly ${EXPECTED_EXPORT_COUNT} exported files, but found ${allFiles.length}. If you intentionally added or removed an exportable module, please update EXPECTED_EXPORT_COUNT in test/imports.test.js.`
  );

  for (const file of allFiles) {
    let content = fs.readFileSync(file, 'utf-8');

    assert.ok(
      content.trim().length > 0, 
      `File ${file} is empty. Exported modules must contain valid CSS.`
    );

    if (file !== 'lib/core.css') {
      content = content.replace(/@font-face\s*\{[^}]+\}/g, '');
      
      assert.match(
        content,
        /@layer\s+[\w.-]+\s*\{/,
        `File ${file} must wrap its exported logic in an @layer directive (e.g. @layer design-system.components { ... }).`
      );
    }
  }
});
