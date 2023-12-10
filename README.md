# react-ayongUI-demo

## 介绍

这是一个react组件库的demo，用于学习react组件库的开发
## 该组件库技术属于 原生React jsx开发 无需任何第三方库

## 开始使用

### 规范必须使用 yarn命令安装依赖

``` 
 yarn 
```

## 运行命令

``` 
npm run dev
```

## 项目结构

1. 项目分为demo一个仓库 ayongUI组件一个仓库
2. ⚠️ 拉取仓库时候，先拉取demo仓库， ⚠️然后在demo的 src目录下拉取 ayongUI组件仓库
3. 提交代码时，先提交组件仓库，再提交demo仓库 切记 顺序不能乱!!!

## 添加组件demo页面步骤

1. 在src/page 新增 xxx.js 组件页面文件
2. 在src/App.js中引入新增的组件demo页面
3. 按照规律增加    <Route path="/button" element={<Button/>}/> 路由
4. 在config配置文件添加组件页面的配置 左侧菜单信息
5. 在组件页面 引入开发好的 ayongUI 组件进行演示

## 组件库的结构目录说明 (在组件库ayongUI仓库内也有一份)
### ⚠️组件库的导出 必须统一在index.ts文件内导出

```json
 ———— components
|··· 主体组件
———— config 组件全局配置
|
———style.module.less 全局样式
———style-const.ts    全局样式TS常量
———— utils 工具类
———— index.ts 组件总入口文件所有组件导出地方
———— package.json 组件依赖文件
———— tsconfig.json 组件TS配置
———— tsconfig.node.json 组件TS-node配置
———— vite.config.ts 组件打包配置
———— yarn.lock 组件打包依赖版本锁
```

## 组件样式规范

1. 样式必须使用 model类型文件 类名使用 小驼峰
2. 全局样式 必须在 config/style里 颜色必须统一使用 全局颜色变量

## 组件开发规范JS TS类型声明文件

1. 声明的TS类必须单独创建改组件的类型文件 例如：table.d.ts 放在 当前文件夹下

## 开源组件开发规范

组件代码开源 所有人都可看到 所以注意JS细节

1. 变量名 方法名必须使用小驼峰 纯英语翻译 如果实在不知道怎么翻译 可以添加前缀 ayong
2. 组件内部JS 单个方法代码量超过20行必须处抽离到外部文件 如果是公共可服用 放到 utils文件内, 如果不可复用放到当前组件文件夹内

## 使用说明

1. 组件开发完成 在demo组件内 使用fieldset标签包裹组件 进行组件效果演示, 
2. demo统一使用 TitleCom 标题组件  和 CodeDisplayCom代码示例组件 详情参考 button的演示效果 
3. 组件入参数 props 使用 表格组件进行说明 表格列字段统一使用公共 global.columns

 

## 测试流程
### 开发模式
1. 在开发模式demo页面直接引入引入ayongUI组件路径 快捷开发 例如

```js
import {Button, Table} from "@/ayongUI/index.ts";
//测试组件
```
### 测试模式
1. 执行demo中的 test命令   **npm run test**  根据弹窗提示操作 
2. 如果执行命令失败 请手动执行 组件库的 **npm run build** 命令 将组件库的package.json 文件 复制到 dist 产物中   然后将dist产物移动到demo中的node_modules文件夹下 然后删除demo中的node_modules文件夹下的.vite缓存文件夹 
3. 重启项目

```js
//demo页面路径需要改成 dist
import {Button, Table} from "dist";
```

```ts
//mian.ts 在demo的main.ts文件引入样式文件
import 'dist/style.css'

```
## git提交规范

1. !⚠️ 必须先提交 ayongUI组件库仓库 然后在提交demo仓库 切记顺序不可乱!⚠️
   2!⚠️ git 提交必须序号 说清 哪些 添加文件 | 删除文件 | 修改文件

```MD
1 添加 button 使用说明示例文档
2 添加 工具utils文件夹

```

3. 先提交dev分支 通过微信群通知大家 代码已经提交到dev分支 我在合并主分支 请大家注意拉取代码

## git解决冲突技巧

1. 先拉去代码 再提交
2. 代码拉去不到 说明有冲突
3. 现将更改内容git暂存
4. 然后在拉去代码
5. 将暂存代码回复使用 手动修改冲突
