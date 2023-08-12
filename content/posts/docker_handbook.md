---
author: "Jihan"
title: "一些日常使用的手册"
date: "2023-04-23"
tags:
- handbook
---
<!--more-->
# Docker 

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

## 将Docker中的数据转移到其他盘符
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