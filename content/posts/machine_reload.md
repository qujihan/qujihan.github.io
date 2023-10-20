---
author: "Jihan"
title: "Mac/Win/Linux 使用指北"
date: "2023-07-29"
tags:
- Machine
---
这里记录下我重装机器需要的一些指令, 我平时会把我系统搞的乱七八糟的, 身为强迫症晚期患者, 每三四个月可能就会重装一次系统
<!--more-->

# MacOS
## 安装软件
```shell
# install brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/qujihan/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
# install software
brew install --cask microsoft-edge bob snipaste squirrel visual-studio-code obsidian wezterm qq qqmusic wechat tencent-lemon feishu
# install language
brew install cmake go rustup node typst python@3.11
rustup-init
rustup update
# install tools
brew install yazi stow cloc hugo starship nushell podman
# neovim
brew install neovim ripgrep fd
# config squirrel
git clone git@github.com:qujihan/Rime.git /Users/qujihan/Library/Rime
# config mac tools 
git clone --recurse-submodules git@github.com:qujihan/.dotfiles.git ~/.dotfiles
~/.dotfiles/mac.sh -install
```
安装一些常用的软件: office, oneDrive, iBar, clashX, Xcode
## 删除系统自带的ABC输入法
关机长按指纹键, 进入恢复模式, 在顶部的菜单栏中的实用工具中找到终端, 输入 `csrutil disable`, 如果输出下面的表示禁用成功
```
Successfully disabled System Integrity Protection. Please restart the machine for the changes to take effect. 
```
修改com.apple.HIToolbox.plist文件, 重启即可
```shell
# 备份plist文件
cp ~/Library/Preferences/com.apple.HIToolbox.plist  ~/Library/Preferences/com.apple.HIToolbox.plist.backup

# 这里使用下面的指令看一下是不是这个样子(第一个Dict的Name是ABC)
# AppleEnabledInputSources = Array {
#         Dict {
#             InputSourceKind = Keyboard Layout
#             KeyboardLayout Name = ABC
#             KeyboardLayout ID = 252
#         }
#         ......
#     }
/usr/libexec/PlistBuddy -c "Print"  ~/Library/Preferences/com.apple.HIToolbox.plist 

# 删除ABC输入法
/usr/libexec/PlistBuddy -c "Delete :AppleEnabledInputSources:0"  ~/Library/Preferences/com.apple.HIToolbox.plist 
```

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
scoop install sudo git starship nu
# Tools
scoop install wechat trafficmonitor snipaste powertoys
# Editor
scoop install obsidian wezterm 
winget install Microsoft.PowerShell Microsoft.VisualStudioCode
# Language
scoop install make gcc clangd cmake python rustup go 
```


# 其他配置

## 配置包管理器镜像
```bash
# npm
npm config set registry https://registry.npm.taobao.org
# pip
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
# go
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```
## 下载语言相关应用
```shell
# About Go 
go install golang.org/x/tools/gopls@latest
go install github.com/go-delve/delve/cmd/dlv@latest
# About Rust
cargo install stylua
```

## 配置网络代理
```shell
# set proxy (at wsl or docker)
# ~/.bashrc
proxy(){
    hostip=$(cat /etc/resolv.conf | grep -oP "(?<=nameserver\ ).*")
    export http_proxy="http://${hostip}:7890"
    export https_proxy="http://${hostip}:7890"
    export all_proxy="http://${hostip}:7890"
}
unproxy(){
    unset http_proxy
    unset https_proxy
    unset all_proxy
}
alias pp="proxy"
alias up="unproxy"
```
## 配置 ssh
```shell
ssh-keygen -t ed25519 -C "qujihan@163.com"
cat .ssh/id_ed25519.pub
ssh -T git@github.com
```
在VSCode中配置ssh连接
```config
Host github.com
  Hostname ssh.github.com
  Port 443

Host localhost
  HostName localhost
  User jihan
  Port 2222
```