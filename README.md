# vite-plugin-git-version

[![NPM version](https://img.shields.io/npm/v/vite-plugin-git-version?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-git-version)

Get the `version` information from `package.json`, then automatically put the version file `version.json` in your project dist folder when packaging.

```json
// package.json
{
  // ...
  "version": "0.0.1"
}
```
```json
// dist/version.json
{
  "version": "0.0.1"
}
```

## Install

```bash
npm i vite-plugin-git-version
```

Add plugin to your `vite.config.ts`:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import versionPlugin from 'vite-plugin-git-version'

export default defineConfig({
  plugins: [
    versionPlugin(),
  ],
})

```

## License

[MIT](./LICENSE) License © 2022 [YRM](https://github.com/xkloveme)
