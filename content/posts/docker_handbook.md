---
author: "Jihan"
title: "Docker 手册"
date: "2023-04-23"
tags:
- docker
- handbook
---

Docker的一些使用记录
<!--more-->

## 基本的Docker操作
```shell
docker volume create volume_name
docker build -t image_name --build-arg arch=amd64  .
# mac/linux
docker run -it --name cmu -v ~/docker_data/:/root/data image_name
# windows
docker run -it --name container_name -v volume_name:root/data image_name
docker exec -it container_name /bin/bash
```

## dockerfile
```shell
FROM ubuntu:22.04
ARG arch=amd64
ARG user=user

# set workdir
WORKDIR /root/

# set volume
VOLUME [ "root/src", "root/data" ]

# change apt sources, use tsinghua mirror, and install application
RUN sed -i 's/ports\.ubuntu\.com/mirrors.tuna.tsinghua.edu.cn/g' /etc/apt/sources.list &&\
    apt update &&\
    apt install -y curl git &&\
    apt clean --dry-run

# set ln
RUN test ! -f /usr/bin/cc  && ln -s clang-12 /usr/bin/cc
RUN test ! -f /usr/bin/g++ && ln -s clang++-12 /usr/bin/g++

# set proxy
RUN echo "HOST_IP=$(grep -oP '(?<=nameserver\ ).*' /etc/resolv.conf)" >> .bashrc &&\
    echo "PROXY_ADDR=\"http://\$HOST_IP:7890\"" >> .bashrc &&\
    echo "HTTP_PROXY=\"\$PORXY_ADDR\"" >> .bashrc &&\
    echo "HTTPS_PROXY=\"\$PORXY_ADDR\"" >> .bashrc &&\
    /bin/bash -c "source .bashrc"

# set hostname
RUN echo PS1=\"[${user}@docker \\W] \\$ \" >> .bashrc
```


## 其他

### 如何将Docker中的数据转移到其他盘符
以下皆是以移动到D:/wsl为例
```shell
wsl --export docker-desktop D:\wsl\docker-desktop.tar
wsl --export docker-desktop-data D:\wsl\docker-desktop-data.tar
wsl --unregister docker-desktop
wsl --unregister docker-desktop-data
wsl --import docker-desktop D:\wsl\docker-desktop D:\wsl\docker-desktop.tar --version 2
wsl --import docker-desktop-data D:\wsl\docker-desktop-data D:\wsl\docker-desktop-data.tar --version 2
```
参考：
1. [Moving Docker wsl files #5829 docker/for-win](https://github.com/docker/for-win/issues/5829)
2. [Move VHD File · Issue #4320 microsoft/WSL](https://github.com/microsoft/WSL/issues/4320#issuecomment-571758494)