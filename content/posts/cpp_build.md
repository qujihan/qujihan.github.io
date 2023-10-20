---
author: "Jihan"
title: "C++的项目构建实践记录"
date: "2023-08-26"
tags:
---

在构建C/C++相关程序的时候, 没有go build/cargo build 之类的构建工具, 只能使用 Makefile/CMake 这类工具, 写一个比较通用的模板, 方便以后自己的使用
<!--more-->


# 构建工具

## makefile 

目录结构
```shell
├── hello.cc
├── include
│   └── hello.h
├── main
├── main.cc
└── makefile
```

```makefile
main: hello.o
	g++ -o main main.cc $^ -Iinclude && rm -rf *.o

%.o: %.cc
	g++ -c $< -o $@ -Iinclude

clean:
	rm -rf *.o main
```

目录结构
```shell
├── main.cc
├── makefile
└── src
    ├── hello.cc
    └── include
        └── hello.h
```


```makefile
cc=g++
target=main
build_dir=build
src_dir=src .
include_dir=src/include

cflags=$(patsubst %,-I%, $(include_dir))
source=$(foreach dir, $(src_dir), $(wildcard $(dir)/*.cc))
objs=$(patsubst %.cc, $(build_dir)/%.o, $(notdir $(source)))
VPATH=$(src_dir)

$(build_dir)/%.o:%.cc | build
	$(cc) $(cflags) -c $< -o $@

$(target): $(objs)
	$(cc) $^ -o $@

.PHONY: clean build
clean:
	rm -rf $(build_dir) $(target)

build:
	mkdir -p $(build_dir)
```

### makefile的一些解释

- 自动变量
	- `$<`: 表示第一个依赖对象
	- `$^`: 表示所有依赖对象
	- `$@`: 表示目标

例如:
```makefile
test: demo.c demo.h main.c
# 上面这个例子中:
# $< 就是demo.c
# $^ 就是demo.c demo.h main.c
# $@ 就是test
```

- 文件搜索
`vpath` 与 `VPATH` 的应用, 其中`vpath`是关键字,`VPATH` 是变量
```makefile
# 会从 src 与 ../include 中去搜寻依赖文件
VPATH = src:../include

# 在 include 文件中搜索所有的 .h 文件
# vpath <pattern> <dir>
vpath %.h include

# 清除设置好的目录
vpath
```

- 内置函数
	- `patsubst`: 模式匹配
		- 原型: `$(patsubst <pattern>,<replacement>,<text>)`
		- 例子: `obj=$(patsubst %.c, %.o, main.c test.c)`:将这两个文件都替换成 `.o` 结尾, 并赋值给 `obj`
	- `notdir`: 去掉路径中的目录
		- 原型: `$(notdir <text>)`
		- 例子: `obj=$(notdir /src/main.c)`: 最后得到是没有文件夹目录的 `main.c` 并赋值给 `obj`
	- `wildcard`: 匹配文件
		- 原型: `$(wildcard <pattern>)`
		- 例子: `include=$(wildcard *.h)`: 找到所有的 `.h` 文件并赋值给 `include`
	- `foreach`: 批处理
		- 原型: `$(foreach <var>,<list>,<text>)`
		- 例子: `files=$(foreach dir, $(dir), $(wildcard $(dir)/*.c))`: 就是将所有 `dir` 下的目录中的 `.c` 文件都赋值给 `files`



## CMake
```shell
├── main.cc
├── makefile
└── src
    ├── hello.cc
    └── include
        └── hello.h
```


```makefile
cmake_minimum_required(VERSION 3.16)

project(hello)

set(CMAKE_CXX_STANDARD 14)
set(CMAKE_C_STANDARD 11)

include_directories(./src/include)
file(GLOB_RECURSE SOURCES "src/*.cc")
add_executable(main main.cc ${SOURCES})
```