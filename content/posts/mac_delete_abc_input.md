---
author: "Jihan"
title: "在 M1/M2 Mac中删除自带的ABC输入法"
date: "2023-07-29"
tags:
- mac
---

在使用Mac的过程中, 我使用的是开源的 Rime 输入法, 这款输入法自己可以切换中英文输入, 那么Mac自带的ABC输入法就不那么需要了, 否则会在有的时候打乱思路
<!--more-->



# 关闭系统完整性保护 SIP

关机长按指纹键, 进入恢复模式

在顶部的菜单栏中的实用工具中找到终端, 输入 `csrutil disable`

如果输出下面的表示禁用成功

`
Successfully disabled System Integrity Protection. Please restart the machine for the changes to take effect. 
`

# 修改com.apple.HIToolbox.plist文件

位于 ~/Library/Preferences/com.apple.HIToolbox.plist

删掉有关ABC的内容就可以了



