---
author: "Jihan"
title: "Ubuntu 使用指北"
date: "2023-07-29"
tags:
- Linux
---

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