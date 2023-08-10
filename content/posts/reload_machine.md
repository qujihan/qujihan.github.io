---
author: "jihan"
title: "重装机器所需操作一览"
date: "2023-03-15"
tags: 
- windows
- mac
- ubuntu
- handbook
---
这是一篇自用，但是大家可以参考的文章。
<!--more-->
## Windows

### 跳过联网激活使用本地账号
在连接网络的界面按住Shift+F10调出CMD输入`OOBE\BYPASSNRO`

### 安装软件
```shell
# Needed to run a remote script the first time
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser 

# set scoop dir is C:\Scoop
md C:\Scoop 
irm get.scoop.sh -outfile 'install.ps1'
.\install.ps1 -ScoopDir 'C:\Scoop' -ScoopGlobalDir 'C:\Scoop' -NoProxy

scoop install sudo git starship

scoop bucket add extras

scoop install obsidian wechat potplayer trafficmonitor snipaste powertoys wezterm zotero autohotkey

scoop install goland idea-ultimate pycharm-professional clion

scoop install make gcc cmake python go rustup

# for emacs rime
scoop bucket add wsw0108 https://github.com/wsw0108/scoop-bucket.git
scoop install librime

go install github.com/go-delve/delve/cmd/dlv@latest
go install golang.org/x/tools/gopls@latest

# winget install
winget install Microsoft.PowerShell Microsoft.VisualStudioCode
```


## MacOS
### 安装软件
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


## Ubuntu
### 设置ssh


配置ssh所需的一些命令（windows mac linux）
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