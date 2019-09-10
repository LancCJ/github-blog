---
category: Visual Studio
tags:
  - Visual Studio
date: 2019-09-10
title: Visual Studio打开项目不兼容问题解决
vssue-title: Visual Studio打开项目不兼容问题解决
---

## 教程简介

最近在打开Visual Studio项目的时候报出了不兼容的提示信息，对于这块的接触好久没碰了特此记录一下

## 报错现象

打开项目后直接显示如图的问题


![打开项目报错不兼容](/img/lvduoduo/打开项目报错不兼容.png)

## 原因:

缺少InstallerProjects拓展组件，Setup程序需要以此为基础进行打包输出exe


## 解决方案

下载安装[InstallerProjects拓展组件](/files/lvduoduo/InstallerProjects.vsix)，重新打开项目