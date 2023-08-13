---
author: "Jihan"
title: "Windows 使用指北"
date: "2023-07-29"
tags:
- Windows
---
<!--more-->

# Windows

## 跳过联网激活使用本地账号
在连接网络的界面按住Shift+F10调出CMD输入`OOBE\BYPASSNRO`

## 安装软件
```shell
# Needed to run a remote script the first time
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser 

# set scoop dir is C:\Scoop
md C:\Scoop 
irm get.scoop.sh -outfile 'install.ps1'
.\install.ps1 -ScoopDir 'C:\Scoop' -ScoopGlobalDir 'C:\Scoop' -NoProxy

scoop bucket add extras

# Terminal tools
scoop install sudo git starship

# Tools
scoop install wechat trafficmonitor snipaste powertoys zotero

# Editor
scoop install obsidian wezterm 
winget install Microsoft.PowerShell Microsoft.VisualStudioCode

# IDE
scoop install goland idea-ultimate pycharm-professional clion

# language
scoop install make gcc clangd cmake python rustup

# Emacs
scoop bucket add wsw0108 https://github.com/wsw0108/scoop-bucket.git
scoop install emacs librime

# Go
scoop install go
go install github.com/go-delve/delve/cmd/dlv@latest
go install golang.org/x/tools/gopls@latest

```