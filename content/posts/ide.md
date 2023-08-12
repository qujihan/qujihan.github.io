---
author: "Jihan"
title: "各种编辑器使用指北"
date: "2023-07-29"
tags:
- Editor
---


# VSCode
一些vscode的基本配置，下面的文件可以在 文件 -> 首选项 -> 设置 ，右上角的第一个文件（悬浮会显示打开更改）
```json
{
    // Font
    "editor.fontFamily": "\"FiraCode Nerd Font Mono\"",

    // VSCodeVim
    "vim.useSystemClipboard": true,
    "vim.leader": "<space>",
    "vim.vimrc.enable": true,
    "vim.surround": true,
    "vim.sneak": true,
}
```

[Available context keys](https://code.visualstudio.com/api/references/when-clause-contexts#available-context-keys)
一些vscode的基本键盘配置，下面的文件可以在 文件 -> 首选项 -> 键盘快捷方式 ，右上角的第一个文件（悬浮会显示打开键盘快捷方式）
```json
[
    {
        "key": "alt+h",
        "command": "workbench.action.navigateLeft",
    },
    {
        "key": "alt+j",
        "command": "workbench.action.navigateDown",
    },
    {
        "key": "alt+k",
        "command": "workbench.action.navigateUp",
    },
    {
        "key": "alt+l",
        "command": "workbench.action.navigateRight",
    },
    {
        "key": "alt+,",
        "command": "workbench.action.previousEditor",
    },
    {
        "key": "alt+.",
        "command": "workbench.action.nextEditor",
    },
    {
        "key": "alt+e",
        "command": "workbench.view.explorer"
    },
    {
        "key": "ctrl+j",
        "command": "workbench.action.quickOpenSelectNext",
        "when": "inQuickOpen"
    },
    {
        "key": "ctrl+k",
        "command": "workbench.action.quickOpenSelectPrevious",
        "when": "inQuickOpen"
    },

    /* FileExplorer */
    // open file or folder
    {
        "key": "o",
        "command": "explorer.openAndPassFocus",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "o",
        "command": "list.select",
        "when": "listFocus && !inputFocus"
    },
    // open to side
    {
        "key": "ctrl+o",
        "command": "explorer.openToSide",
        "when": "explorerViewletFocus && foldersViewVisible && !inputFocus"
    },
    // delete
    {
        "key": "d",
        "command": "deleteFile",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceReadonly && !inputFocus"
    },
    // create new file
    {
        "key": "a",
        "command": "explorer.newFile",
        "when": "filesExplorerFocus && foldersViewVisible && !inputFocus"
    },
    // cut
    {
        "key": "x",
        "command": "filesExplorer.cut",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
    },
    // copy
    {
        "key": "y",
        "command": "filesExplorer.copy",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !inputFocus"
    },
    // paste
    {
        "key": "p",
        "command": "filesExplorer.paste",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceReadonly && !inputFocus"
    },
    // fresh
    {
        "key": "R",
        "command": "workbench.files.action.refreshFilesExplorer",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
    },
    // rename
    {
        "key": "r",
        "command": "renameFile",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
    },
]
```

.vscodevimrc(位于~/.vscodevimrc)

```lua
" Set Windows Keymaps "
nmap <Leader>ff actions.find
nmap <Leader><Leader><Leader> workbench.action.toggleFullScreen
nmap <Leader>wa workbench.action.toggleActivityBarVisibility
nmap <Leader>wb workbench.action.toggleSidebarVisibility
nmap <Leader>wt workbench.action.toggleMenuBar
nmap <Leader>wz workbench.action.toggleZenMode
nmap <Leader>b debug.toggleBreakpoint

" Set LSP Keymaps "
nmap <Leader>lf editor.action.formatDocument
nmap <Leader>la editor.action.quickFix
nmap [d editor.action.marker.prev
nmap ]d editor.action.marker.next
nmap K editor.action.showHover

```





# Jetbrains


# Vim/Neovim

# Emacs
## Dired

- 选择
  - m 选中
  - u 取消选中
  - U 取消所有选中
  - t 反选
  - * / 选择所有目录
  - x 执行所有命令