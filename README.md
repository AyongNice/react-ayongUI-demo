# react-ayongUI-demo

## 介绍

这是一个react组件库的demo，用于学习react组件库的开发

## 开始使用

添加组件步骤

执行命令

yarn

运行命令 npm run dev

## 添加组件demo页面步骤

-1: 在src/page 新增 xxx.js文件
-2: 在src/App.js中引入新增的组件demo页面
-3: 按照规律增加    <Route path="/button" element={<Button/>}/> 路由
-4: 在config配置文件添加组件页面的配置信息
-5: 在组件页面 引入开发好的组件进行演示

## 项目结构

项目分为demo一个仓库 组件一个仓库
提交代码时，先提交组件仓库，再提交demo仓库
拉取下来时，先拉取demo仓库，在demo src目录下拉取组件仓库
