---
author: "Jihan"
title: "源码安装PG"
date: "2023-08-04"
tags:
- Postgresql
---
天天看就天天有收获!嘿嘿!
<!--more-->

**安装Docker镜像**
```shell
docker run -it --name pg -v data:/root/data ubuntu:22.04
```
注意：这里配置了一个volume,Windows下的 `\docker-desktop-data\data\docker\volumes\data\_data` 目录与docker内的`root/data` 共享空间

如果不需要可以将`-v data:/root/data `删掉


**在Docker内的操作**
```shell 
# change ubuntu:22.04 apt source
echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted
deb http://security.ubuntu.com/ubuntu/ jammy-security main restricted universe multiverse" > /etc/apt/sources.list

# apt install
apt install -y vim gcc make g++ git libreadline-dev zlib1g-dev libicu-dev bison flex

# install(at postgresql source code dir)
cd && git clone https://github.com/postgres/postgres.git && cd ~/postgres
./configure --without-icu
make -j32 all && make install 

# add user
useradd -m pg
usermod -s /bin/bash pg
passwd pg
su pg

# add a lien at .bashrc
export PATH=$PATH:/usr/local/pgsql/bin

# source .bashrc
source ~/.bashrc

# pg init
mkdir ~/pg_data && cd ~/pg_data
initdb -D .
pg_ctl -D . -l logfile start
createdb
```
