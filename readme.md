# 你好，我叫温正官，很高兴认识你。

## 项目路径

[https://github.com/AustinWen0530/myzone/](https://github.com/AustinWen0530/myzone/) master 分支

## 项目运行

- 在项目文件夹下执行命令，加载依赖：`npm install`
- 在项目文件夹下执行命令，运行项目：`npm run docs:dev`
- 待启动成功后打开地址即可：[http://localhost:8080/myzone/](http://localhost:8080/myzone/)

## 项目架构

- 采用 vuepress 构建

```lua
##需要自己写主题样式的话，在.vuepress/ 下新建theme文件夹并按如下目录布局
Dev
├─── docs
│   └── .vuepress   // 配置目录
│   │    ├── public // 静态资源
│   │    ├── theme  // 主题
│   │    │   ├── components // 组件
│   │    │   ├── global-components // 全局组件
│   │    │   ├── layouts // 布局(包括首页在内)
│   │    │   ├── styles  // 样式
│   │    │   ├── util 	 // 工具
│   │    │   ├── index.js // 入口配置
│   │    │   ├── noopModule.js // 依赖注入
│   │    │   ├── package.json  // 主题依赖
│   │    │   ├── README.md     // 主题说明
│   │    └── config.js
│   ├── about   // 项目模块
│   ├── views   // 项目模块
│   └── README.md   // 首页
└── package.json //项目依赖
```

## 项目介绍

- 前端知识点复习和面试总结

## 开始编写 markdown

- 参考示例：

```yaml
---
title: 文章标题
date: 2019-02-28
tags:
 - 标签
categories:
 - 分类
keys:
 - '123456' //文章加密密码
sticky: 1   //文章置顶 1, 2, 3, ...
isShowComments: false //是否开启评论
publish: true //文章是否发布
---

<Boxx/> //随机展示名人名言

[[toc]] //目录链接

- 这里可以写`摘要`等其它

<!-- more --> //在<!-- more -->之前的内容会展示为文章摘要

## 正式开始你的markdown

- I am the text...
```

## 项目部署

本项目在根目录 script 文件夹下内置了两个项目提交脚本：

- 如果提交到 github 项目 master 分支下（本项目源码），运行 deploy-master.sh
- 如果提交到 gitPages，运行 deploy-gh.sh
  (具体可根据自身项目情况编写适合自己的脚本文件~)
