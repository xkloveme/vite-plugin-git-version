import { existsSync, promises as fs } from 'fs'
import { join } from 'path'
import { execSync } from 'child_process'
import type { Plugin } from 'vite'
import _debug from 'debug'

const debug = _debug('vite-plugin-git-version')

export interface Options {
  /**
   * File path of package.json
   * @default 'package.json'
   */
  packageJsonPath?: string
  /**
   * Field name in package.json which is used to represent the version number
   * @default 'version'
   */
  field?: string
  /**
   * The name of the file where the version number is stored
   * After packaging this file will be placed in the dist folder
   * @default 'version.json'
   */
  fileName?: string
}

function vitePluginVersion(options: Options = {}): Plugin {
  const {
    packageJsonPath = join(process.cwd(), 'package.json'),
    field = 'version',
    fileName = 'version.json',
  } = options

  return {
    name: 'vite-plugin-git-version',
    apply: 'build',
    async buildStart() {
      if (!existsSync(packageJsonPath)) {
        debug('package.json not found at %s', packageJsonPath)
        return
      }

      try {
        const packageJson: Record<string, any> = JSON.parse(
          await fs.readFile(packageJsonPath, 'utf-8'),
        )
        const version = packageJson[field]
        const name = packageJson['name']
        if (!version) {
          debug('no %s field found in package.json', field)
          return
        }
        debug(
          '%s field found in package.json, the value is %s',
          field,
          version,
        )
        const command = 'git log -1 --pretty=format:'
        const commandContent = 'git log -3 --pretty=format:%s'
        const Branch = execSync(`${command}%d`).toString().trim()
        const Hash = execSync(`${command}%H`).toString().trim()
        const author = execSync(`${command}%cn`).toString().trim()
        const email = execSync(`${command}%ce`).toString().trim()
        const content = execSync(`${commandContent}`).toString().trim()
         // 生成版本时间
         let getNowTime = function () {
          let dateTime
          let yy = new Date().getFullYear()
          let mm = new Date().getMonth() + 1
          let dd = new Date().getDate()
          let hh = new Date().getHours()
          let mf =
            new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
          let ss =
            new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()
          dateTime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss
          return dateTime
        }
        const jsonStr = {
          name,
          version,
          branch: `${Branch}`,
          hash: `${Hash}`,
          commitUser: `${author}(${email})`,
          commitContent: `${content}`,
          time: getNowTime(),
        }
        this.emitFile({
          fileName,
          source: JSON.stringify(jsonStr),
          type: 'asset',
        })
      }
      catch (e) {
        debug('parse error: %o', e)
        debug('error on loading package.json at %s', packageJsonPath)
      }
    },
  }
}

export default vitePluginVersion
