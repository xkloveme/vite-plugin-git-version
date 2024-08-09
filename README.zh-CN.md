<h1 align="center">vite-plugin-git-version</h1>

<p align="center">
  一个专注于生成 Git 项目打包信息的 Vite 插件。
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vite-plugin-git-version">
    <img src="https://img.shields.io/npm/v/vite-plugin-git-version?color=orange&label=" alt="版本" />
  </a>
  <a href="https://github.com/qmhc/vite-plugin-git-version/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/vite-plugin-git-version" alt="许可证" />
  </a>
</p>

**中文** | [English](./README.md)

## 更适合与华通云开发工具搭配使用

[Microsoft Store 下载](https://microsoftedge.microsoft.com/addons/detail/%E5%8D%8E%E9%80%9A%E4%BA%91%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/afmbapanbkfkkpknjdepbafobedckoeg?hl=zh-CN)

[使用文档](https://wt-front-end.github.io/wt-docs/wt-edge.html)

从 `package.json` 获取 `version` 信息，并在打包时自动将版本文件 `version.json` 放入项目 dist 文件夹。

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

## 安装
```bash
pnpm add vite-plugin-git-version
```

```bash
yarn add vite-plugin-git-version
```

```bash
npm i vite-plugin-git-version
```

在您的 `vite.config.ts` 或 `vite.config.js` 中添加插件：

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

## 许可证

[MIT](./LICENSE) License © 2024 [xkloveme](https://github.com/xkloveme)