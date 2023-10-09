---
author: "Jihan"
title: "C++的实践记录"
date: "2023-08-26"
tags:
---


# 构建工具

## makefile 
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
## CMake