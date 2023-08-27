---
author: "Jihan"
title: "一些日常使用的手册"
date: "2023-04-23"
tags:
- Snipaste
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


## Docker 多平台 image构建

多平台构建并且push到dockerhub上
```shell
docker buildx create --name my_ubuntu --use 
# 这里省略了docker login之类的步骤
docker buildx build --platform linux/amd64,linux/arm64 -t qujihan/ubuntu . 
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


# GDB
如果可以选择的话, 现在更推荐使用lldb啦!

**指定参数**
- 启动的时候 `gdb --args <exe>`
- 在启动后 `set args <args>`
- 在启动后 `r <args>`

**附加到进程**
- `gdb attach <pid>`
- `gdb --pid <pid>`

**设置断点**
- 行数断点设置: `break/b filename:line`
- 函数断点设置: `break/b function_name`
- 条件断点设置: `break/b condition`
    - `b main.cpp:14 if i==90`: 在i=90的时候才会停止
- 正则断点设置: `rb regex`
- 临时断点设置: `tb breakpoint`

**断点管理**
- 查看断点: `info/i breakpoints/b`
- 禁用/启动断点: `disable/enable breakpoint_num`
- 删除断点: `delete breakpoint`
    - 只使用`delete`会删除所有的断点
- 将断点信息保存: `save breakpoint b.txt`
- 载入断点信息: `source b.txt`
- 为point_num断点设置断点的执行代码, 设置后可以使用 `i b` 查看
```gdb_command
commands point_num
p *point
p arg
end
```

**显示变量信息**

`set print pretty`: 设置显示的结构体好看一点
- `p arg_name`
- `info arg`
- `info functions`: 查看函数
- `info locals`: 查看本地变量
- `whatis /opts arg/function`: 查看变量/函数的类型
- `ptype /opts arg`: 查看具体的类型
    - opts
        - `/o`: 显示偏移量
        - `/m`: 不显示成员函数
    - **提示** 此时不显示派生类的类型, 需要 `set print object on`
    - 其他参数可以在[这里](https://sourceware.org/gdb/onlinedocs/gdb/Symbols.html#Symbols)看到, ptyps与whatis参加相同

**修改变量**
- `p i=10`
    - 将i修改为10

**查看内存**
- `e /opts addr`
    - `/10b`: 显示10byte
    - `/s`: 显示字符串

**修改内存**
- `set addr = xxx`

**查看寄存器**
- `i registers`: 查看所有的寄存器
- `i r rdi`: 查看具体的寄存器
    - `rdi rsi rdx rcx r8 r9`: 函数参数在寄存器中的顺序

**修改寄存器**
- `p $rip=0xaaaaaa `或者 `set var $pc=0xaaaaaa `
    - 一般可以配合行号地址使用: `info line 15` -> `p $rip=0x222222`

**查看汇编**
- `disasemble /opts`: 查看汇编指令
    - /m: 汇编命令与源码一一对应
    - /r: 显示汇编指令的原始字节

**执行过程**
- step-over:单步执行:遇到函数就跳过函数
    - `next` 或者 `n`
- step-into:单步执行:遇到函数进入函数
    - `step` 或者 `s`
- `skip func_name`: 跳过执行某个函数(实际还是执行了,只是不进去而已, 下同)
- `skip file_name`: 跳过执行某文件内的所有函数
- `skip -gfi common/*`: 跳过common文件里的所有文件

**观察点管理**
- `watch arg_name`: 当 `arg_name` 被写的时候就会停止
    - `watch arg_name thread 1`: 只有当线程1读的时候会停止(`i threads` 可以查看当前所有的进程)
    - `watch arg1 + arg2 > 10`: 当符合条件就会停下来
- `rwatch arg_name`: 读的时候就会停止
- `awatch arg_name`: 读写的时候都会停止
- `info watch`: 显示所有的观察点
- `delete/disable/enable watch_num`

**捕获点管理**
- `cache event`: 当捕获到事件的时候就会停止下来 [event list](https://sourceware.org/gdb/onlinedocs/gdb/Set-Catchpoints.html)

**源代码查看**

`set listsize 20 `: 设置可以查看的代码行数为20
- `list/l`: 显示代码(默认10行)
- `list/l filename:line`: 查看指定文件指定行数的代码
- `list/l function`: 查看指定函数的代码
- `list/l function1::function2`: 查看指定函数的函数的代码
- `list/l -`: 显示前面的代码
- `search regex`: 默认向后搜索
    - `serarch test`: 找到所有含有test的代码
- `forward-search regex`: 向前搜索
- `reverse-search regex`: 循环搜索

**窗口管理**
- `layout src/asm/reg`
- `layout split`
- `focus/fs src/asm/reg/cmd`
- `info win`
- `ctrl+x+a`

**函数栈管理**
- `backtrace/bt`: 查看栈回溯信息
- `frame n`: 切换栈帧
- `info f n`: 查看栈帧

**调用函数**

`p` 会显示void的返回值而`call`不会
- `p express`
- `call express`

**与外部的交互**

`set logging on/off`: log输出管理
`set logging file filename`: 设置输出文件
`set logging overwrite`: 覆盖输出文件(默认是追加)
- `shell/! command`: 执行外部命令
- `pipe/| command | grep test`: 管道符

**退出当前函数**
- `finish`

**退出调试**
- `detach`
- `quit` 或者 `q`


## 其他记录
### 多线程
`set print thread-events on/off`: 设置是否打印线程的日志信息
- `info/i threads`: 查看所有线程的信息
- `b main.cpp:132 thread thread_num`: 为线程 thread_num 设置一个断点
- `thread/t find`: 查找线程
- `thread/t thread_num`: 切换线程
- `thread/t name`: 设置线程名称
- `thread/t apply thread_num command`: 为线程执行命令
    - `thread/t apply 2 p locals`
    - `thread/t apply 3 bt`
    - `thread/t apply 1 2 3 i locals`
    - `thread/t apply 1-3 i locals`
    - `thread/t apply all bt`
#### 死锁问题
`thread apply all bt`: 先查看所有的进程的调用栈
`thread thread_num` => `f frame_num`: 看每一个进程都是在哪里停住

### 跳转执行/反向执行
- `jump filename:line`: 跳转到某一行开始执行
- `record`:反向执行之前需要先记录下来
- `record stop`
- `rn/rs/rc`:n/s/c的反向操作
- `reverse-finish`: 反向执行到函数的开始

### 多进程
`set schedule multiple on/off`: 多个进程时候可以同时运行(默认是:off)
- `info inferior`: GDB所包含的所有子程序
- `inferior num`: 切换到不同的inferior
- `add-inferior`: 添加一个inferior
- `remove-inferior`: 删除一个inferior
- `detach inferior num`: 将进程取消attach

#### 父子进程调试
`set follow-fork-mode child/parent `: 设置调试跟随父进程还是子进程


`set detach-on-fork on/off`: 设置在fork子进程后会不会分离

如果想父进程和子进程一起调试, 就需要将`detach-on-fork`设置为`off`, 然后就可以一起调试了


### 简单的内存检查
`call malloc_stats()`: 调用系统的函数去查看内存信息

`call malloc_info(0, stdout)`: stdout是标准输出(也可以是其他文件)输出的是xml格式

`gcc -fsanitize=address`: 使得gcc检查 内存/堆/栈/全局内存/释放后使用(野指针) 问题

### 调试符号


#### gdb 命令

**附加调试信息去调试**
`gdb --sysbol=release-section -exec=release`

**写二进制文件**(破解可用)
`gdb --write filename`(gdb默认只读)




#### strip 命令
去掉debug信息
`strip -g with_debug_info_file -o outfile`

#### objcopy 命令
`objcopy `: 生成debug信息
### core dump 核心转储

**命令**

- 为活着的文件生成core dump文件: attach 进程以后,使用`generate-core-file`可以生成core dump文件
- 命令行设置`ulimit -c unlimited`, `echo -e "%e-%p-%t" > /proc/sys/kernel/core_pattern`
    - 第一个是设置 不限制进程的最大数
    - 第二个是设置 生成的dump文件的名字: 进程名称-pid-time
- 调试崩溃的文件: `gdb filename core_dump_file_path`

加载core dump: `gdb core_dump_filename`


## Links
- [GDB Manual PDF](https://sourceware.org/gdb/current/onlinedocs/gdb.pdf)
- [GDB Manual Single page](https://sourceware.org/gdb/onlinedocs/gdb/index.html)
- [GDB to LLDB map](https://lldb.llvm.org/use/map.html)