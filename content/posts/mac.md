---
author: "Jihan"
title: "Mac 使用指北"
date: "2023-07-29"
tags:
- mac
---
记录一些解决的Mac问题, 避免以后无意义的搜索
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



# 删除系统自带的ABC输入法
在使用Mac的过程中, 我使用的是开源的 Rime 输入法, 这款输入法自己可以切换中英文输入, 那么Mac自带的ABC输入法就不那么需要了, 否则会在有的时候打乱思路

以下仅仅在M系列芯片实验过
## 关闭系统完整性保护 SIP
关机长按指纹键, 进入恢复模式

在顶部的菜单栏中的实用工具中找到终端, 输入 `csrutil disable`

如果输出下面的表示禁用成功
`
Successfully disabled System Integrity Protection. Please restart the machine for the changes to take effect. 
`
## 修改com.apple.HIToolbox.plist文件
位于 ~/Library/Preferences/com.apple.HIToolbox.plist

删掉有关ABC的内容就可以了



