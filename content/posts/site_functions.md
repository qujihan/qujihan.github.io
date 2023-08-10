---
author: "Jihan"
title: "记录本站实现的功能"
date: "2023-01-01"
math: true
viz: true
# top: true
top: false
tags: 
- handbooks
---

<!--more-->

这个就是本文的md文件的头部部分

```yaml
    ---
    author: "Jihan"
    title: "记录本站实现的功能"
    date: "2023-01-01"
    math: true
    viz: true
    # top: true
    top: false
    tags: 
    - handbooks
    ---
```

### Math
当`math: true` 的时候, 可以使用 $\LaTeX$ 去渲染数学公式

### Viz
当`viz: true` 的时候, 可以使用语言为`viz-dot`的代码块去渲染graphviz代码, 生成svg图片

例如:
```viz-dot
digraph {
  a -> b
}
```

就是使用下面的代码渲染出来的(```后面跟的是viz-dot)
```
digraph {
  a -> b
}

```


### Top
当`top: true` 的时候, 可以在主页显示