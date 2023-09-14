---
author: "Jihan"
title: "[ALGO] 二分查找的理解"
date: "2023-05-20"
tags:
- Algorithm
---
对二分查找的理解，以leetcode34为例
<!--more-->

## 二分框架
在二分查找中，虽然有许多需要注意到细节，但是总体框架还是比较统一的，所以先说一下大框架
```go
func binary_search(nums []int, target int) int {
	left, right := ... // 初始化两边的参数 决定了是开区间还是闭区间

	// 在不同的区间类型选择里 使用不同的operator
	for left operator right {
		mid := left + (right - left)/2
		if nums[mid] operator target {
			change left point
		} else {
			change right point
		}
	}

	return left or right
}
```

总结一下，在经典的二分中，需要改变的点就是：
1. 使用什么样的区间
	- [left, right] ：左闭右闭区间
	- [left, right) ：左闭右开区间
	- (left, right) ：左开右开区间
2. 需要什么样子的结果
	- `<= < > >=`
3. 如何更新左右指针
	- left = mid or left = mid - 1 or ...
	- right = mid or right = mid + 1 or ...
4. 根据所需的结果选择返回left还是right
	- return left
	- return right

对于上面的伪代码，有两点需要说明：
1. 在伪代码中使用了类似 golang 的语法，for 在语言中的作用与 c/c++ 中的 while 一样
2. 更新 mid 的操作，其实等同于 `mid := (left + right)/2` ，但是如伪代码所写，可以防止溢出

## 具体理解(以[left, right]为例)

```go
// [left, right]
// [left, len(nums)] 是符合更新right的那个if条件的集合
// [0, right] 是符合更新left的那个if条件的集合
func binary_search_1(nums []int, target int) int {
	left, right := 0, len(nums)-1 // [left, right]
	for left <= right {
		mid := left + (right-left)/2
		if nums[mid] < target { // or <=,>,>=
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return left // or right
}
```




## 其他区间 code snippets

### [left, right)
```go
// [left, right)
// [left, len(nums)] 是符合更新right的那个if条件的集合
// [0, right) 是符合更新left的那个if条件的集合
func binary_search_2(nums []int, target int) int {
	left, right := 0, len(nums) // [left, right)
	for left < right {
		mid := left + (right-left)/2
		if nums[mid] < target { // or <=,>,>=
			left = mid + 1
		} else {
			right = mid
		}
	}
	return left // or right
}
```
### (left, right)
```go
// (left, rihgt)
// (left, len(nums)] 是符合更新right的那个if条件的集合
// [0, right) 是符合更新left的那个if条件的集合
func binary_search_3(nums []int, target int) int {
	left, right := -1, len(nums) //(left, rihgt)
	for left+1 < right {
		mid := left + (right-left)/2
		if nums[mid] < target { // or <=,>,>=
			left = mid
		} else {
			right = mid
		}
	}
	return left // or right
}
```

## 一些转换
对于整数而言 \
`indexOf(>=target)` \
`indexOf(>target)`  (相当于 `indexOf(>=target)+1`) \
`indexOf(<target)`  (相当于 `indexOf(>=target)-1`) \
`indexOf(<=target)` (相当于 `indexOf(>target)-1`) 

## Leetcode34