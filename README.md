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

## 组件样式规范

1. 样式必须使用 model类型文件 类名使用 小驼峰
2. 全局样式 必须在 config/style里 颜色必须统一使用 全局颜色变量

## 组件开发规范JS TS类型声明文件

1. 声明的TS类必须单独创建改组件的类型文件 例如：index.d.ts 放在 当前文件夹下

## 开源组件开发规范

组件代码开源 所有人都可看到 所以注意JS细节

1. 变量名 方法名必须使用小驼峰 纯英语翻译 如果实在不知道怎么翻译 可以添加前缀 ayong
2. 组件内部JS 单个方法代码量超过20行必须处抽离到外部文件 如果是公共可服用 放到 utils文件内, 如果不可复用放到当前组件文件夹内

## 使用说明

1. 组件开发完成 在demo组件内必须写好 md文件使用说明文档 参考ayong-button.md 文档格式

## 测试流程
### 开发模式
1. 在开发模式demo页面直接引入引入ayongUI组件路径 快捷开发 例如

```js
import {Button, Table} from "@/ayongUI/index.ts";
//测试组件
```
### 测试模式
1. 执行demo中的 test命令   **npm run test**  根据弹窗提示操作

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