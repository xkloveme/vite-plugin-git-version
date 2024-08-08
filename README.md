# vite-plugin-git-version

[![NPM version](https://img.shields.io/npm/v/vite-plugin-git-version?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-git-version)

## 配合华通云开发工具使用更棒

[微软商店下载](https://microsoftedge.microsoft.com/addons/detail/%E5%8D%8E%E9%80%9A%E4%BA%91%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/afmbapanbkfkkpknjdepbafobedckoeg?hl=zh-CN)


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
{"name":"playground","version":"0.0.0","branch":"(HEAD -> master, origin/master)","hash":"e9900a320e81d8ba5e3a32c8650425f6824cdc90","commitUser":"786775394@qq.com(xkloveme@gmail.com)","commitContent":"更新版本\ninit: 初始化","time":"2024-8-8 21:14:31"}
```

## Install

```bash
npm i vite-plugin-git-version
```

Add plugin to your `vite.config.ts`:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import versionGitPlugin from 'vite-plugin-git-version'

export default defineConfig({
  plugins: [
    versionGitPlugin(),
  ],
})

```

## License

[MIT](./LICENSE) License © 2024 [xkloveme](https://github.com/xkloveme)
