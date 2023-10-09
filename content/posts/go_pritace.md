---
author: "Jihan"
title: "Golang 实践记录"
date: "2023-10-09"
tags:
---


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
