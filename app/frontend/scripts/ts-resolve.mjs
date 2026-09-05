// The data modules use extensionless relative imports (bundler resolution).
// Node's ESM loader needs the extension, so add it during resolution.
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { register } from 'node:module';

export function resolve(specifier, context, next) {
  if (specifier.startsWith('.') && !/\.[mc]?[jt]sx?$/.test(specifier)) {
    const base = new URL(specifier, context.parentURL);
    for (const ext of ['.ts', '.tsx', '/index.ts']) {
      const candidate = new URL(base.href + ext);
      if (existsSync(fileURLToPath(candidate))) {
        return next(specifier + ext, context);
      }
    }
  }
  return next(specifier, context);
}

register(import.meta.url, import.meta.url);
