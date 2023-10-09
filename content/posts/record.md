---
author: "Jihan"
title: "记录关于编码与数据库的一些东西"
date: "2023-07-23"
top: true
tags:
- Handbook
---
<!--more-->


# 一些项目的博客
- [阿里云数据库内核月报](https://github.com/tangwz/db-monthly)
- [OpenACID](https://blog.openacid.com/): 来自databend, 以后想看看他的  将paxos于raft统一到一个协议下, 太强了 (但是还没看)
- [DSDSD CWI](https://dsdsd.da.cwi.nl/) /  [DuckDB Blog](https://duckdb.org/news/)
- [PingCAP](https://cn.pingcap.com/blog/)
- [C++中文周刊](https://github.com/wanghenshui/cppweeklynews) /  [ISO C++ Blog](https://isocpp.org/blog)

# 一些大佬的博客
- [虎哥](http://bohutang.me/):原来就职于阿里的大佬, 因为其[ClickHouse](https://clickhouse.com/docs/zh)和他的朋友们系列而关注 
- [迟策](https://www.skyzh.dev/): CMU大佬, 15445维护者, [知乎](https://www.zhihu.com/people/skyzh)
- [叉鸽 | MrCroxx](http://blog.mrcroxx.com/): 写的深入浅出LevelDB系列特别好, 打算以后看看他的深入浅出etcd/raft系列, [知乎](https://www.zhihu.com/people/mrcroxx)
- [木鸟杂记](https://www.qtmuniao.com/): 当时可以看LevelDB入坑的, 后来看其他的也不错, [知乎](https://www.zhihu.com/people/qtmuniao)
- [涛叔](https://taoshu.in/): 一位B站的大佬, 平时看看闲谈与Go语言相关的东西不错, [知乎](https://www.zhihu.com/people/taoshu0)
- [CatKang](catkang.github.io): 阿里云的大佬, 有庖丁解InnoDB, 庖丁解LevelDB 等存储相关的一些东西,[知乎](https://www.zhihu.com/people/cat_kang)
- [tonybai](https://tonybai.com/): 一个Golang大佬, 我会看他的关于Golang的文章
- [codedump](https://www.codedump.info/): 看他写的一些存储相关的东西, [知乎](https://www.zhihu.com/people/lin-jin-he/zvideos)
- [Ben Hoyt](https://benhoyt.com/writings/): 一位Go大佬, 因为其写的一段[go实现正则](https://benhoyt.com/writings/rob-pike-regex/)而认识, 还有一些有意思的项目, 例如使用Go实现一个简单的git([gogit](https://benhoyt.com/writings/gogit/)), [Mugo](https://benhoyt.com/writings/mugo/)一个可以自举的compiler(Go的子集)
- [面向信仰编程](https://draveness.me/): 一个Go大佬, 写的 Go语言设计与实现很好, Blog 内容质量也很高
- [Lan Tian](https://lantian.pub/): 想看其 NixOS 系列文章, 但是没怎么看过, 
- [manateelazycat](https://manateelazycat.github.io/index.html): Emacs 大佬, lsp-bridge 作者, 本来打算看看Emacs的, 但是没时间, 以后看看
- [Xianting Lu](http://celthi.github.io/): effective-debugging的中文译者, 他的C++驿站与Rust系列日后打算看一下


# 别人的List
- [Awesome-database-learn](https://github.com/pingcap/awesome-database-learning): PingCap整理的资料, 应该是传播最广的了
- [LSM优化相关List](https://github.com/BaronStack/book_paper): 这个大佬在[CSDN博客](https://vigourtyy-zhg.blog.csdn.net/?type=blog)写的很多, 质量很高
- [优化器](https://zhuanlan.zhihu.com/p/363997416): 阿里云的梁辰大佬总结的
- [SQL引擎发表、落地论文总结](https://zhuanlan.zhihu.com/p/642501923): 对上面大佬的总结, 还是不错的
- [开源优化器资料](https://zhuanlan.zhihu.com/p/609987395): 与上面的是一个作者, 闲暇的时候可以看看
- [Awesome-dbdev](https://github.com/huachaohuang/awesome-dbdev): 数据库开发的材料
- [Database System](https://github.com/Sunt-ing/database-system-readings)
- [分布式公式算法List](https://github.com/heidihoward/distributed-consensus-reading-list)

# 一些资料
### 课程
- [CS144](https://github.com/CS144/minnow)
- [MIT-missing-semester 计算机教育中缺失的一课(中文翻译)](https://missing-semester-cn.github.io/)
- CSAPP
    - [CSAPP-Labs-Home](http://csapp.cs.cmu.edu/3e/labs.html)
    - [CSAPP-Schedule](http://www.cs.cmu.edu/afs/cs/academic/class/15213-f15/www/schedule.html)
    - [CSAPP-课后习题Solution](https://dreamanddead.github.io/CSAPP-3e-Solutions/)
    - [CSAPP-notes](https://wdxtub.com/csapp/thin-csapp-0/2016/04/16/)
- [MIT 6.172 软件系统性能工程](https://open.163.com/newview/movie/courseintro?newurl=UGK2NHP65)
- MIT-6.081
    - [MIT-6.081 操作系统(课程翻译)](https://mit-public-courses-cn-translatio.gitbook.io/mit6-s081/)
    - [MIT-6.081 操作系统(文档 中文翻译)](http://xv6.dgs.zone/)
- [MIT-6.8540 分布式系统(课程翻译)](https://mit-public-courses-cn-translatio.gitbook.io/mit6-824/)
- [计算机程序的构造与解释](https://github.com/DeathKing/Learning-SICP)
- [TiDB的SQL Layer Course](https://github.com/talent-plan/tinysql)
- [Talent Plan Courses](https://github.com/pingcap/talent-plan)
- [Linux C 编程一站式学习](http://me.52fhy.com/linux-c/)

### 书籍
#### C/C++
按照我理想的阅读顺序排序(有我没有看过的, 那些都是想当然排序的)

- [C++ Primer](): 经典
- [Effective Cpp](): 经典, 但是听老的了, 结合 Effective Modern Cpp 看(同一个作者)
- [More Effective Cpp](): 经典
- [Effective Modern Cpp](https://github.com/CnTransGroup/EffectiveModernCppChinese): 正在成为经典
- [C++ Core Guidelines](https://github.com/lynnboy/CppCoreGuidelines-zh-CN): C++之父的作品, 有许多C++17相关的内容
- [C++20 STL Cookbook](https://github.com/xiaoweiChen/CPP-20-STL-Cookbook): 结合C++20特性更好的利用STL
- [C/C++编程规范指南](https://github.com/Qihoo360/safe-rules): 主要看看C/C++的UB(Undefined Behavior)
- [Google 开源项目风格指南(中文)](https://zh-google-styleguide.readthedocs.io/en/latest/contents/): Google代码风格是比较广泛的标准了吧
- [Modern C++ Tutorial](https://github.com/changkun/modern-cpp-tutorial): 一些小Tips, 总的来说还是可以的
- [Modern C++ Cheatsheet](https://github.com/AnthonyCalandra/modern-cpp-features): 英文的, 算是现代features集合的索引吧
- [C++那些事](https://light-city.github.io/): 用处不大, 一种类似八股的东西
- 一些工具
    - [结构C++语法糖](https://cppinsights.io/)

#### Go
按照我理想的阅读顺序排序(有我没有看过的, 那些都是想当然排序的)

- [Go 指南/Go 语言之旅](https://tour.go-zh.org/): 最最基础的入门了
- [Go 语言圣经](https://golang-china.github.io/gopl-zh/): 没看完, 应该是类似C++ Primer在C++领域的生态位吧
- [Go 语言设计与实现](https://draveness.me/golang/): 入门深入理解Go的第一本书
- [Master Go 第一版](https://www.bookstack.cn/read/Mastering_Go_ZH_CN/README.md) [Master Go 第二版](https://hantmac.gitbook.io/mastering-go-second/): 第二版是第一版的补充
- [Go 语言高级编程](https://chai2010.cn/advanced-go-programming-book/index.html): 涉及了CGO, Go汇编, RPC, 分布式相关内容
- [Go by Example 中文](https://gobyexample-cn.github.io/): 一些代码 Snipaste
- [Go advice](https://github.com/cristaloleg/go-advice/blob/master/README_ZH.md): 很短, 半天就可以看完
- [Uber Go Style Guide 中文](https://github.com/xxjwxc/uber_go_guide_cn)
- [Effective Go](https://golang.google.cn/doc/effective_go): 官网资料
- [Go 语言原本](https://github.com/golang-design/under-the-hood): 研究源码的, 还没看过
- [Go 八股文](https://www.topgoer.cn/docs/gomianshiti/mianshiti): 八股文, 闲的时候可以看看

#### Rust
- [Rust 程序设计语言](https://kaisery.github.io/trpl-zh-cn/title-page.html): Rust社区维护的教程
- [Rust 语言圣经](https://course.rs/about-book.html)
- [Learn Rust Easy](https://rustycab.github.io/LearnRustEasy/)
- [Rust 原子与锁](https://atomics.rs/about-book.html)
- [Google 出的 Rust教程](https://google.github.io/comprehensive-rust/)
- [通过例子学 Rust](https://rustwiki.org/zh-CN/rust-by-example/index.html)

#### Haskell
- [Learn You a Haskell for Great Good](http://learnyouahaskell.com/chapters): 大家都说这个网站学 Haskell 不错, 但是我还没有动手
- [Real World Haskell 中文](https://github.com/huangz1990/real-world-haskell-cn)

#### Dubug
- [Effective Debugging(中文)](https://github.com/Celthi/effective-debugging-zh)
- [LLDB Toturil](https://lldb.llvm.org/use/tutorial.html)

#### Git
- [Git Pro(中文)](https://git.oschina.net/progit/)

#### Linux
- [Linux 命令行](http://billie66.github.io/TLCL/)
- [Efficient Linux at the Command Line](https://www.oreilly.com/library/view/efficient-linux-at/9781098113391/): 听说这个书不错, 但是没有看过

#### Makefile / CMake
- [跟我一起写Makefile](https://seisman.github.io/how-to-write-makefile/index.html)
- [CMake 入门实战](https://www.hahack.com/codes/cmake/)
- [CMake Cookbook](https://github.com/xiaoweiChen/CMake-Cookbook) / [在线阅读](https://www.bookstack.cn/read/CMake-Cookbook/README.md)
- [Modern CMake(中文翻译)](https://modern-cmake-cn.github.io/Modern-CMake-zh_CN/)

#### Docker
- [Docker从入门到实践](https://yeasy.gitbook.io/docker_practice/)

#### Vim/NeoVim
- [Vim 从入门到精通](https://github.com/wsdjeg/vim-galore-zh_cn): 入门学习的时候用的
- [Vim 命令速查表](https://github.com/chloneda/vim-cheatsheet): 平时查阅vim命令的时候用
- [Vim学习笔记](https://yyq123.github.io/learn-vim/): 有些概念不清楚的时候看看
- [Vim学习笔记-开篇/目录](https://zhuanlan.zhihu.com/p/37478384): 进阶阅读的东西, 没事的时候看看总有新收获
- [Learn Essential Vim Skills](http://vimcasts.org/episodes/archive/): 应该是最知名的Vim Skill分享的地方, 没事就看看
- [Vim 中文文档计划](https://github.com/yianwillis/vimcdoc): Vim 的文档的中文翻译, 更新还是蛮及时的
- [Vim 插件开发指南](https://github.com/wsdjeg/vim-plugin-dev-guide): 开发插件, 但是感觉以后用lua开发比较多了, 毕竟比viml开发的效率高多了
- [VimL 语言编程指北路](https://github.com/lymslive/vimllearn): vimL学习
- [Learn Vimscript the Hard Way](https://learnvimscriptthehardway.stevelosh.com/): : vimL学习, 英文的, 不常看