---
author: "Jihan"
title: "代码 snipaste"
date: "2023-06-02"
tags:
- Snipaste
---
<!--more-->


# Go
在二维数组中添加元素
```golang
temp := []int{intervals[0][0], intervals[0][1]}
ans = append(ans, append([]int{}, temp...))
```

定义函数
```golang
func main(){
    var check func(i, j, index int) bool
    check = func(i, j, index int) bool {
        // this is function body.
    }
}
```
自定义ListNode
```golang
type ListNode struct {
	Val  int
	Next *ListNode
}
func main(){
    list := []int{3, 2, 0, -4}
    head := &ListNode{Val: list[0]}
    tail := head
    for i := 1; i < len(list); i++ {
        tail.Next = &ListNode{Val: list[i]}
        tail = tail.Next
    }
}
```

# Makefile
```makefile
EXE:= exe
EXECUTABLE:= $(EXE)

LIBDIR:=
LIBS:=
INCLUDES:=.
SRCDIR:=

CC:=g++
CFLAGS:= -g -Wall -O0  
CPPFLAGS:= $(CFLAGS)
CPPFLAGS+= $(addprefix -I,$(INCLUDES))
CPPFLAGS+= -I.
CPPFLAGS+= -MMD

RM-F:= rm -f

SRCS:= $(wildcard *.cpp) $(wildcard $(addsuffix /*.cpp, $(SRCDIR)))
OBJS:= $(patsubst %.cpp,%.o,$(SRCS))
DEPS:= $(patsubst %.o,%.d,$(OBJS))
MISSING_DEPS:= $(filter-out $(wildcard $(DEPS)),$(DEPS))


.PHONY : all deps objs clean
all:$(EXECUTABLE)
deps:$(DEPS)

objs:$(OBJS)
clean:
	@$(RM-F) *.o
	@$(RM-F) *.d
	@$(RM-F) $(EXE)

ifneq ($(MISSING_DEPS),)
$(MISSING_DEPS):
	@$(RM-F) $(patsubst %.d,%.o,$@)
endif
-include $(DEPS)
$(EXECUTABLE) : $(OBJS)
	$(CC) -o $(EXECUTABLE) $(OBJS) $(addprefix -L,$(LIBDIR)) $(addprefix -l,$(LIBS))
```