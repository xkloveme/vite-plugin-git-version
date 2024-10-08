<h1 align="center">vite-plugin-git-version</h1>

<p align="center">
A Vite plugin that focuses on generating packaging information for Git projects.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vite-plugin-git-version">
    <img src="https://img.shields.io/npm/v/vite-plugin-git-version?color=orange&label=" alt="version" />
  </a>
  <a href="https://github.com/qmhc/vite-plugin-git-version/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/vite-plugin-git-version" alt="license" />
  </a>
</p>


**English** | [中文](./README.zh-CN.md)

## It is better to use with watone tools power builder

[Microsoft Store Download](https://microsoftedge.microsoft.com/addons/detail/%E5%8D%8E%E9%80%9A%E4%BA%91%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/afmbapanbkfkkpknjdepbafobedckoeg?hl=zh-CN)

[Use Documentation](https://wt-front-end.github.io/wt-docs/wt-edge.html)

Get the `version` information from `package.json`, then automatically put the version file `version.json` in your project dist folder when packaging.

```json
// package.json
{
  // ...
  "name": "vite-plugin-git-version",
  "version": "1.0.0"
}
```
```json
// dist/version.json
{
  "name": "vite-plugin-git-version",
  "version": "1.0.0",
  "branch": "(HEAD -> main, origin/main, origin/HEAD)",
  "hash": "3e85fdd2e0aeac7685e3d20da16ff979440cbcb8",
  "commitUser": "xkloveme (xkloveme@gmail.com)",
  "commitContent": "chore: 更新README和package.json中的依赖信息\n更新版本\nchore: release v1.0.4",
  "time": "2024-08-09 22:13:11"
}
```

## Install
```bash
pnpm add vite-plugin-git-version
```
```bash
yarn add vite-plugin-git-version
```

```bash
npm i vite-plugin-git-version
```

Add plugin to your `vite.config.ts` or `vite.config.js`:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import VersionGitPlugin from 'vite-plugin-git-version'

export default defineConfig({
  plugins: [
    VersionGitPlugin(),
  ],
})

```

## License

[MIT](./LICENSE) License © 2024 [xkloveme](https://github.com/xkloveme)
