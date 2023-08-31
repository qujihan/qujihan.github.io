---
author: "Jihan"
title: "Mac/Win/Linux 使用指北"
date: "2023-07-29"
tags:
- Machine
---
记录一些机器重装之类的问题, 避免以后无意义的搜索
<!--more-->

# MacOS
## 安装软件
```shell
# install brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# software
brew install --cask docker microsoft-edge zotero
# tools
brew install --cask bob snipaste squirrel
# editors
brew install --cask visual-studio-code obsidian wezterm
brew install --cask pycharm clion intellij-idea goland
# common software
brew install --cask qq qqmusic wechat tencent-lemon feishu
# for delete abc input
brew install --cask plistedit-pro

# neovim
brew install neovim ripgrep fd
# programming language && lsp && dap
brew install cmake go gopls delve typst
# tools
brew install lazygit sevenzip stow cloc hugo squirrel
# for zsh
brew install starship
brew install romkatv/powerlevel10k/powerlevel10k 
brew install zsh-autosuggestions zsh-syntax-highlighting zsh-completions zsh-git-prompt
```
安装一些常用的软件: keynote, office, onedrive, ibar, clashX, xcode



## 删除系统自带的ABC输入法
在使用Mac的过程中, 我使用的是开源的 Rime 输入法, 这款输入法自己可以切换中英文输入, 那么Mac自带的ABC输入法就不那么需要了, 否则会在有的时候打乱思路

以下仅仅在M系列芯片实验过
### 关闭系统完整性保护 SIP
关机长按指纹键, 进入恢复模式

在顶部的菜单栏中的实用工具中找到终端, 输入 `csrutil disable`

如果输出下面的表示禁用成功
`
Successfully disabled System Integrity Protection. Please restart the machine for the changes to take effect. 
`
### 修改com.apple.HIToolbox.plist文件
位于 ~/Library/Preferences/com.apple.HIToolbox.plist

删掉有关ABC的内容就可以了

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

# Ubuntu
## 设置ssh


配置ssh所需的一些命令
```shell
ssh-keygen -t ed25519 -C "qujihan@163.com"
cat .ssh/id_ed25519.pub
ssh -T git@github.com
```
在[Github](https://github.com/settings/keys)上就可以设置ssh了

现在在最新版本的 ubuntu 可以使用 snap 去安装 neovim 了
```shell
# install neovim latest
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage
chmod u+x nvim.appimage
./nvim.appimage --appimage-extract
mv squashfs-root /
ln -s /squashfs-root/AppRun /usr/bin/nvim
```

有时候需要设置一下代理才可以访问一些服务 \
就在 `~/.bashrc`中设置\
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