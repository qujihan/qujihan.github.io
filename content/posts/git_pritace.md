---
author: "Jihan"
title: "Git的实践记录分享"
date: "2023-10-02"
---


在过去的许多时间里, 执拗且内存记忆的我总是与Git斗争. 从一开始的害怕到熟悉, 再到现在的勇敢面对, 我经历了良多. 特于此记录下我的斗争过程, 以克服我的内存化记忆

## git rebase
rebase 是我最常使用的命令了, 毕竟我是一个强迫症后期患者, 每一次的commit记录都干干净净的

rebase 的功能主要是(我会经常使用的功能): 更改commit信息(amend), 合并commit(squash), 删除commit(drop)

下面创建一个 git 仓库以方面下面的演示
```shell
git init
# 初始化一个只要 readmd 的仓库
echo "init git" > README.md && git add . && git commit -m "init"
# 新建一个文件, 只写入 一行信息
echo "hello" > git.txt && git add . && git commit -m "pick this commit"
# 向文件添加信息, 但是因为 commit 是乱写的, 需要修改
echo "world" >> git.txt && git add . && git commit -m "......."
# 这个向文件中写的信息是乱的, 日后需要删掉写的这一段
echo "drop this line" >> git.txt && git add . && git commit -m "drop this commit"
# 这个信息是需要的保留的
echo "pick this line" >> git.txt && git add . && git commit -m "pick this commit"
# 这个信息是对上一条的增补, 应该与上一条是在一个commit中
echo "squash this line" >> git.txt && git add . && git commit -m "squash this commit"
```
使用 `git log` 后的效果应该是类似于这个样子
```shell
commit 36275e225770bd4df551d1f1b1fe2cf6cf96dbbf (HEAD -> master)
Author: qujihan <qujihan@163.com>
Date:   Sat Oct 14 15:49:13 2023 +0800

    squash this commit

commit fb9ed7fa9e63a5895143a49cb6758ee8291bffb7
Author: qujihan <qujihan@163.com>
Date:   Sat Oct 14 15:49:10 2023 +0800

    pick this commit

commit c99be237d5737e4539aedf93dc5efd5c2085be6a
Author: qujihan <qujihan@163.com>
Date:   Sat Oct 14 15:49:04 2023 +0800

    drop this commit

commit 892d255186cb1a8b0fc9b19c29a3e21da801cada
Author: qujihan <qujihan@163.com>
Date:   Sat Oct 14 15:49:01 2023 +0800

    .......

commit 2dcbab2f3c6bec5c9ded1126251a6b5252ba8624
Author: qujihan <qujihan@163.com>
Date:   Sat Oct 14 15:48:54 2023 +0800

    pick this commit

commit 94509cc64297e86d5f4f96d8c99223e3ea8adfa2
Author: qujihan <qujihan@163.com>
Date:   Sat Oct 14 15:48:50 2023 +0800

    init
```

执行 `git rebase -i HEAD~5` 其实就是修改 HEAD 前五条记录

也可以使用 `git rebase -i b4bb33acf5f5995e02dc4ef0c9777ce872ea9701`, 这个hash值是 need pick 那一条的hash值, 就是指这一条以后的记录都需要修改

就会出现这个界面(使用vim去修改)

```git
pick 2dcbab2 pick this commit
pick 892d255 .......
pick c99be23 drop this commit
pick fb9ed7f pick this commit
pick 36275e2 squash this commit
```

将之修改成这个样子就可以了, 具体的信息可以看当前界面下的Commands
```
pick 2dcbab2 pick this commit
e 892d255 .......
d c99be23 drop this commit
pick fb9ed7f pick this commit
s 36275e2 squash this commit
```

修改后按照 git 的提示去完成修改commit信息 以及处理冲突就可以了~


## git log
记得有一次我需要在一大堆log中分析某段时间里的提交(还是开着会议众多大佬看着我找, 太尴尬了)

当时我手中只有带有完整记录的代码

实习公司内部使用的是自建的git仓库, 我还没有访问权限

只有自定义log的显示方式, 以使我可以方便的寻找了

```shell
# hash值 + 提交人 + 提交绝对时间 + commit信息
git log --pretty=format:"%h/%an/%ad : %s" --date=format:'%y-%m-%d %H:%M:%S' 
# hash值 + 提交人 + 提交相对时间 + commit信息
git log --pretty=format:"%h/%an/%ar : %s" 


# 可以加的参数
--since="2023-01-01" --until="2023-02-01"
--since="30 days ago"
--since="1 week ago"
--since="1 mouth ago"
--author="qujihan"
```


## 下载一个仓库中的部分文件夹
使用的命令主要是 sparse clone 与 sparse checkout


- 对我而言, 一个最重要的使用场景是下载我们学校在github上共享的资源 [uestc-course](https://github.com/Xovee/uestc-course), 比如我想下载图论及应用
    - `git clone --depth 1 --filter=blob:none --sparse https://github.com/Xovee/uestc-course.git`
    - `git sparse-checkout set 课程目录/图论及应用` (别忘了进入clone后的目录中)


## Git 的 Patch
我第一次使用还是在帮我同门搞 pg 插件的时候, 发现他们使用的是 patch, 就十分神奇, 应用场景主要是分享更改

patch中有两类指令
- `git diff` 与 `git apply`
- `git format-patch` 与 `git am`

我的理解是前者是对文件进行操作, 后者是对提交进行的操作

```shell
git diff
git diff --staged
git diff <commit> <commit>
git diff branch..branch

# 使用管道符保存起来
# 例如
git diff branch..branch > change.patch

# 应用这个修改
git apply change.patch
```


```shell
# 将当前分支与master下的所有分支差异的commit保存到 patches目录下
git format-patch -o patches master
# 应用
git am < patches/*
```
